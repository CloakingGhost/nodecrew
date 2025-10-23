'use client';

import { useState } from 'react';

import {
  ToastProvider,
  Button,
  Input,
  Textarea,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenu,
  DropdownMenuTrigger,
} from '@nodecrew/design-system';

import { zodResolver } from '@hookform/resolvers/zod';
import { RiArrowDownSLine } from '@remixicon/react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const FORM_FIELDS = {
  CATEGORY: { name: 'category', label: '문의 카테고리' },
  AFFILIATION: { name: 'affiliation', label: '소속' },
  NAME_AND_POSITION: { name: 'nameAndPosition', label: '성함/직책' },
  PHONE: { name: 'phone', label: '연락처(휴대전화)' },
  INQUIRY: { name: 'inquiry', label: '문의내용' },
} as const;

const CATEGORIES = [
  { value: 'education', label: '교육 도입/제휴 문의' },
  { value: 'solution', label: '솔루션 도입/제휴 문의' },
  { value: 'etc', label: '기타' },
] as const;

const categoryValues = CATEGORIES.map(({ value }) => value);

const contactInquiryFormSchema = z.object({
  [FORM_FIELDS.CATEGORY.name]: z
    .string()
    .min(1, { message: '카테고리를 선택해주세요.' })
    .refine(
      value =>
        categoryValues.includes(value as (typeof categoryValues)[number]),
      {
        message: '유효하지 않은 카테고리입니다.',
      },
    ),
  [FORM_FIELDS.AFFILIATION.name]: z.string().min(1, '소속을 입력해주세요'),
  [FORM_FIELDS.NAME_AND_POSITION.name]: z
    .string()
    .min(1, '성함/직책을 입력해주세요'),
  [FORM_FIELDS.PHONE.name]: z
    .string()
    .min(1, '연락처를 입력해주세요')
    .regex(
      /^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/,
      '올바른 휴대전화번호 형식이 아닙니다',
    ),
  [FORM_FIELDS.INQUIRY.name]: z.string().min(1, '문의내용을 입력해주세요'),
});

type ContactInquiryFormData = z.infer<typeof contactInquiryFormSchema>;

type FormProps = {
  hashId?: string;
};

export default function ContactInquiryForm({ hashId }: FormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<ContactInquiryFormData>({
    resolver: zodResolver(contactInquiryFormSchema),
    defaultValues: {
      [FORM_FIELDS.CATEGORY.name]: '',
      [FORM_FIELDS.AFFILIATION.name]: '',
      [FORM_FIELDS.NAME_AND_POSITION.name]: '',
      [FORM_FIELDS.PHONE.name]: '',
      [FORM_FIELDS.INQUIRY.name]: '',
    },
  });

  const onSubmit = async (/* data: ContactInquiryFormData */) => {
    setIsSubmitting(true);

    try {
      toast.success('미팅 요청이 성공적으로 전송되었습니다');
      form.reset();
    } catch {
      toast.error('이메일 전송 중 오류가 발생했습니다');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ToastProvider>
      <section
        id={hashId}
        className="max-w-200 py-30 mx-auto flex w-full flex-col gap-16 px-5"
      >
        <header className="typography-title2-bold grid gap-1">
          <h2 className="text-primary-radial-gradient">노드크루와 함께</h2>
          <p className="text-label-normal">진행하고 싶은 교육이 있으신가요?</p>
        </header>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="typography-label1-normal-medium text-label-neutral flex w-full min-w-44 flex-col gap-4"
          >
            {/* 문의 카테고리 */}
            <FormField
              control={form.control}
              name={FORM_FIELDS.CATEGORY.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{FORM_FIELDS.CATEGORY.label}</FormLabel>
                  <DropdownMenu>
                    <FormControl>
                      <DropdownMenuTrigger asChild>
                        <Button
                          iconRight={<RiArrowDownSLine />}
                          variant="outlined/assistive"
                          className="typography-body2-normal text-label-alternative bg-background-normal-normal border-1 border-label-disable flex h-14 justify-between rounded-lg p-4"
                        >
                          {field.value
                            ? CATEGORIES.find(c => c.value === field.value)
                                ?.label
                            : '문의 카테고리를 선택해주세요'}
                        </Button>
                      </DropdownMenuTrigger>
                    </FormControl>
                    <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]">
                      <DropdownMenuRadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        {CATEGORIES.map(({ value, label }) => (
                          <DropdownMenuRadioItem
                            className="!typography-body2-normal text-label-alternative"
                            key={value}
                            value={value}
                          >
                            {label}
                          </DropdownMenuRadioItem>
                        ))}
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 소속 */}
            <FormField
              control={form.control}
              name={FORM_FIELDS.AFFILIATION.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{FORM_FIELDS.AFFILIATION.label}</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      className="h-13.5 border-label-disable min-w-44 rounded-lg p-4"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 성함/직책 */}
            <FormField
              control={form.control}
              name={FORM_FIELDS.NAME_AND_POSITION.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{FORM_FIELDS.NAME_AND_POSITION.label}</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      className="h-13.5 border-label-disable min-w-44 rounded-lg p-4"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 연락처 */}
            <FormField
              control={form.control}
              name={FORM_FIELDS.PHONE.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{FORM_FIELDS.PHONE.label}</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      {...field}
                      placeholder="010-1234-5678"
                      className="h-13.5 border-label-disable min-w-44 rounded-lg p-4"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 문의내용 */}
            <FormField
              control={form.control}
              name={FORM_FIELDS.INQUIRY.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{FORM_FIELDS.INQUIRY.label}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="문의내용을 입력해주세요"
                      {...field}
                      className="h-87 border-label-disable min-w-44 resize-none rounded-lg p-4"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* 제출 버튼 */}
            <div className="flex items-center justify-end gap-2.5 py-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                size="large"
                variant="solid/primary"
              >
                {isSubmitting ? '전송 중...' : '미팅 요청하기'}
              </Button>
            </div>
          </form>
        </Form>
      </section>
    </ToastProvider>
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
