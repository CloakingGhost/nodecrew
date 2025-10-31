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

type DepartmentAndPositionProps = {
  control: Control<ContactInquiryFormData>;
  name: typeof FORM_FIELDS.DEPARTMENT_AND_POSITION.name;
  label: string;
};

export default function DepartmentAndPosition({
  control,
  name,
  label,
}: DepartmentAndPositionProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              type="text"
              {...field}
              className="h-13.5 border-label-disable min-w-13 rounded-lg p-4"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
