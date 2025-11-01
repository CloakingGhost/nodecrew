'use server';

import { contactInquiryFormSchema, type ContactInquiryDTO } from './schema';

export async function sendContactInquiry(
  data: ContactInquiryDTO,
): Promise<{ success: true }> {
  const validationResult = contactInquiryFormSchema.safeParse(data);

  if (!validationResult.success) {
    throw new Error('입력값이 올바르지 않습니다.');
  }

  const webhookUrl = process.env.SLACK_WEBHOOK_URL;

  if (!webhookUrl) {
    throw new Error('접수 중 문제가 발생하여 조치 중입니다. 잠시 후 다시 시도해주세요.');
  }

  const { company, charge, departmentAndPosition, email, phone, inquiry } =
    validationResult.data;

  const timestamp = new Date().toLocaleString('ko-KR', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  });

  const slackMessage = {
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: 'NODECREW 홈페이지 미팅 문의',
        },
      },
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: `📅 *접수 시간:* ${timestamp}`,
          },
        ],
      },
      {
        type: 'divider',
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*기업/기관명:*\n${company}`,
          },
          {
            type: 'mrkdwn',
            text: `*담당자명:*\n${charge}`,
          },
          {
            type: 'mrkdwn',
            text: `*부서 및 직책:*\n${departmentAndPosition}`,
          },
          {
            type: 'mrkdwn',
            text: `*이메일:*\n${email}`,
          },
          {
            type: 'mrkdwn',
            text: `*연락처:*\n${phone}`,
          },
        ],
      },
      {
        type: 'divider',
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*문의내용:*\n${inquiry}`,
        },
      },
    ],
  };

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(slackMessage),
    });

    if (!res.ok) {
      throw new Error(
        '문의 접수 중 문제가 발생했습니다. 잠시 후 다시 시도해주세요.',
      );
    }

    return { success: true };
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : '알 수 없는 오류가 발생했습니다.',
    );
  }
}
