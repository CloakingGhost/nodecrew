'use client';

import { useTransition } from 'react';

import { ToastProvider, Form } from '@nodecrew/design-system';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import {
  FORM_FIELDS,
  contactInquiryFormSchema,
  type ContactInquiryFormData,
  sendContactInquiry,
  defaultValues,
} from '@/entities/contact-inquiry/api';

import {
  Charge,
  Company,
  DepartmentAndPosition,
  Description,
  Email,
  Inquiry,
  Phone,
  PrivacyConsent,
  SubmitButton,
} from './form';

type ContactInquiryFormProps = {
  hashId?: string;
};

export default function ContactInquiryForm({
  hashId,
}: ContactInquiryFormProps) {
  const [isPending, startTransition] = useTransition();
  const form = useForm<ContactInquiryFormData>({
    resolver: zodResolver(contactInquiryFormSchema),
    defaultValues,
  });

  const onSubmit = async (data: ContactInquiryFormData) => {
    startTransition(async () => {
      try {
        await sendContactInquiry(data);

        toast.success('요청이 전송되었습니다');
        form.reset();
      } catch (error) {
        toast.error(
          error instanceof Error
            ? error.message
            : '메시지 전송 중 오류가 발생했습니다',
        );
      }
    });
  };

  return (
    <section
      id={hashId}
      className="max-w-200 py-30 mx-auto flex w-full flex-col gap-16 px-5"
    >
      <ToastProvider>
        <Form {...form}>
          <Description />
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="typography-label1-normal-medium text-label-neutral flex w-full min-w-44 flex-col gap-4"
          >
            <Company control={form.control} {...FORM_FIELDS.COMPANY} />

            <div className="flex justify-between gap-4">
              <Charge control={form.control} {...FORM_FIELDS.CHARGE} />

              <DepartmentAndPosition
                control={form.control}
                {...FORM_FIELDS.DEPARTMENT_AND_POSITION}
              />
            </div>

            <Email control={form.control} {...FORM_FIELDS.EMAIL} />

            <Phone control={form.control} {...FORM_FIELDS.PHONE} />

            <Inquiry control={form.control} {...FORM_FIELDS.INQUIRY} />

            <PrivacyConsent control={form.control} {...FORM_FIELDS.CONSENT} />

            <SubmitButton isPending={isPending} />
          </form>
        </Form>
      </ToastProvider>
    </section>
  );
}

/**
 * How To Use
 *
 * 문의 메일 컴포넌트
 * 필요한 컴포넌트 내에서 임포트하여 사용
 *
 * import { ContactInquiryForm } from "@/features/contact-inquiry"
 * import Link from 'next/link';
 *
 * const hashId: string = 'contact'; // optional
 *
 * export function SomePage() {
 *    return (
 *    <>
 *      <Link href={`#${hashId}`}>Move</Link>
 *
 *      <ContactInquiryForm hashId = { hashId } />
 *    </>
 *  );
 * }
 *
 */
