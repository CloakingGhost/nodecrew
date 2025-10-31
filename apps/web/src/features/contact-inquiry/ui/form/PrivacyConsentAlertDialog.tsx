import {
  Button,
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Separator,
} from '@nodecrew/design-system';

export default function PrivacyConsentAlertDialog({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent className="max-w-160">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-start">
            개인정보 수집 및 이용 동의
          </AlertDialogTitle>
        </AlertDialogHeader>

        <AlertDialogDescription>
          주식회사 노드크루는 문의 접수 및 회신을 위해 아래와 같이 개인정보를
          수집·이용합니다.
        </AlertDialogDescription>
        <div className="typography-body2-normal grid gap-2">
          <div>
            <div className="typography-body2-normal-bold">수집목적</div>
            <div>문의 사항 접수, 처리 결과 회신 및 상담</div>
          </div>
          <Separator />
          <div>
            <div className="typography-body2-normal-bold">필수항목</div>
            <div>이름, 소속, 연락처, 이메일</div>
          </div>
          <Separator />
          <div>
            <div className="typography-body2-normal-bold">보유·이용 기간</div>
            <div>
              문의 처리 완료 시점까지
              <ul className="list-disc px-4">
                <li>
                  단, 관련 법령의 규정에 따라 보존할 필요가 있는 경우, 해당
                  법령에서 정한 기간 동안 보관합니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="typography-body2-normal">
          귀하는 위와 같이 개인정보를 수집·이용하는데 동의를 거부할 권리가
          있습니다. 필수 수집 항목에 대한 동의를 거절하는 경우 서비스 이용이
          제한 될 수 있습니다.
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="outlined/assistive" size="small">
              닫기
            </Button>
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
