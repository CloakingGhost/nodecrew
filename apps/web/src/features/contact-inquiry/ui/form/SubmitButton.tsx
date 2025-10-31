import { Button } from '@nodecrew/design-system';

type SubmitButtonProps = {
  isPending: boolean;
};

export default function SubmitButton({ isPending }: SubmitButtonProps) {
  return (
    <div className="py-4 text-end">
      <Button
        type="submit"
        disabled={isPending}
        size="large"
        variant="solid/primary"
      >
        {isPending ? '전송 중...' : '문의하기'}
      </Button>
    </div>
  );
}
