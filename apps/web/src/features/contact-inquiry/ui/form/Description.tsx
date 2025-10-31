import { FormDescription } from '@nodecrew/design-system';

export default function Description() {
  return (
    <FormDescription>
      <span className="typography-title2-bold grid gap-1">
        <span className="text-primary-radial-gradient">교육문의</span>
        <span className="text-label-normal grid sm:inline">
          <span>교육 설계부터 수행까지,&nbsp;</span>
          <span>빠르게 도와드리겠습니다.</span>
        </span>
      </span>
    </FormDescription>
  );
}
