import {
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  Textarea,
  FormMessage,
} from '@nodecrew/design-system';

import { Control } from 'react-hook-form';

import { type ContactInquiryFormData, FORM_FIELDS } from '@/entities/contact-inquiry/api';

type InquiryProps = {
  control: Control<ContactInquiryFormData>;
  name: typeof FORM_FIELDS.INQUIRY.name;
  label: string;
};

export default function Inquiry({ control, name, label }: InquiryProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
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
  );
}
