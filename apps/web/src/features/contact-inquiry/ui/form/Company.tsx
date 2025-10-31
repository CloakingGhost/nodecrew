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

type CompanyProps = {
  control: Control<ContactInquiryFormData>;
  name: typeof FORM_FIELDS.COMPANY.name;
  label: string;
};

export default function Company({ control, name, label }: CompanyProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
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
  );
}
