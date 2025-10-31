import { z } from 'zod';

// 수정 후 > ContactInquiryDTO, contactInquiryFormSchema에도 추가
export const FORM_FIELDS = {
  COMPANY: { name: 'company', label: '기업/기관명' },
  CHARGE: { name: 'charge', label: '담당자명' },
  DEPARTMENT_AND_POSITION: {
    name: 'departmentAndPosition',
    label: '부서 및 직책',
  },
  EMAIL: { name: 'email', label: '이메일' },
  PHONE: { name: 'phone', label: '연락처(휴대전화)' },
  INQUIRY: { name: 'inquiry', label: '문의내용' },
  CONSENT: {
    name: 'consent',
    label: {
      prefix: '[필수]',
      middle: '개인정보 수집 및 이용',
      suffix: '동의',
    },
  },
} as const;

export interface ContactInquiryDTO {
  [FORM_FIELDS.COMPANY.name]: string;
  [FORM_FIELDS.CHARGE.name]: string;
  [FORM_FIELDS.DEPARTMENT_AND_POSITION.name]: string;
  [FORM_FIELDS.EMAIL.name]: string;
  [FORM_FIELDS.PHONE.name]: string;
  [FORM_FIELDS.INQUIRY.name]: string;
  [FORM_FIELDS.CONSENT.name]: boolean;
}

const requiredString = (message: string) => z.string().nonempty(message);
export const contactInquiryFormSchema = z.object({
  [FORM_FIELDS.COMPANY.name]: requiredString('기업/기관명을 입력해주세요'),
  [FORM_FIELDS.CHARGE.name]: requiredString('담당자명을 입력해주세요'),
  [FORM_FIELDS.DEPARTMENT_AND_POSITION.name]:
    requiredString('부서 및 직책을 입력해주세요'),
  [FORM_FIELDS.EMAIL.name]:
    requiredString('이메일을 입력해주세요.').email(
      '올바른 이메일 형식이 아닙니다.',
    ),
  [FORM_FIELDS.PHONE.name]: requiredString('연락처를 입력해주세요').regex(
    /^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/,
    '올바른 휴대전화번호 형식이 아닙니다',
  ),
  [FORM_FIELDS.INQUIRY.name]: requiredString('문의내용을 입력해주세요'),
  [FORM_FIELDS.CONSENT.name]: z.literal(true, '약관 동의는 필수입니다.'),
});

export type ContactInquiryFormData = z.infer<typeof contactInquiryFormSchema>;

const fieldsEntries = Object.values(FORM_FIELDS).map(field => {
  const defaultValue = field.name === FORM_FIELDS.CONSENT.name ? false : '';
  return [field.name, defaultValue];
});

export const defaultValues = Object.fromEntries(fieldsEntries);
