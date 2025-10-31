import {
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  Input,
  FormMessage,
} from '@nodecrew/design-system';

import { Control } from 'react-hook-form';

import { type ContactInquiryFormData, FORM_FIELDS } from '@/entities/contact-inquiry/api';

type PhoneProps = {
  control: Control<ContactInquiryFormData>;
  name: typeof FORM_FIELDS.PHONE.name;
  label: string;
};

export default function Phone({ control, name, label }: PhoneProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
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
  );
}
