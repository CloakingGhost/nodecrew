import {
  Checkbox,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from '@nodecrew/design-system';

import { Control } from 'react-hook-form';

import { type ContactInquiryFormData, FORM_FIELDS } from '@/entities/contact-inquiry/api';

import PrivacyConsentAlertDialog from './PrivacyConsentAlertDialog';

type LabelProps = {
  prefix: string;
  middle: string;
  suffix: string;
};

type PrivacyConsentProps = {
  control: Control<ContactInquiryFormData>;
  name: typeof FORM_FIELDS.CONSENT.name;
  label: LabelProps;
};

export default function PrivacyConsent({
  control,
  name,
  label,
}: PrivacyConsentProps) {
  const { prefix, middle, suffix }: LabelProps = label;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="typography-body2-normal flex items-center gap-2">
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                ref={field.ref}
                name={field.name}
                onBlur={field.onBlur}
              />
              <span>
                {prefix}&nbsp;
                <PrivacyConsentAlertDialog>
                  <u className="cursor-pointer">{middle}</u>
                </PrivacyConsentAlertDialog>
                &nbsp;{suffix}
              </span>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
