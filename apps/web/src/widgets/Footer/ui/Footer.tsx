import Image from 'next/image';

const logo = '/assets/images/logo.png';

const footerInfo = {
  companyName: '주식회사 노드크루',
  ceo: '대표 권이혁',
  email: 'operation@nodecrew.kr',
  address: '서울특별시 도봉구 마들로 13길 61 오피스C동 4층',
  copyright: 'Copyright © 2025 NODECREW Co.,ltd. All Rights Reserved.',
};

function Footer() {
  return (
    <footer className="bg-background-normal-normal border-1 border-line-normal-normal md:px-42 px-8 py-8 md:py-16">
      <div>
        <Image
          src={logo}
          alt="logo"
          width={242}
          height={40}
          className="h-auto"
        />
      </div>

      <div className="typography-body2-normal-medium text-label-normal mt-6 space-y-1 md:mt-12">
        <div className="typography-body2-normal-bold">
          {footerInfo.companyName}
        </div>
        <div>{footerInfo.ceo}</div>
        <div>
          <a
            href={`mailto:${footerInfo.email}`}
            className="hover:bg-label-assistive underline"
          >
            {footerInfo.email}
          </a>
        </div>
        <div>{footerInfo.address}</div>
        <hr className="text-line-normal-normal my-2" />

        <div>{footerInfo.copyright}</div>
      </div>
    </footer>
  );
}

export default Footer;
