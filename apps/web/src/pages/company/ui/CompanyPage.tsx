import {
  RiTeamFill,
  RiPresentationFill,
  type RemixiconComponentType,
} from '@remixicon/react';

import { ContactInquiryForm } from '@/features/contact-inquiry';

import { Logo } from '@/shared/ui';

import { Galaxy } from './galaxy';
import { SvgRadialGradient } from './gradient';
import { Orb } from './orb';
import { PixelCard } from './pixel-card';

const LOGO_SIZE = { width: 218, height: 36 } as const;

const REACT_BITS = {
  GALAXY: {
    glowIntensity: 0.2,
    saturation: 0.2,
    hueShift: 130,
    rotationSpeed: 0,
    starSpeed: 1,
    speed: 0.1,
  },
  ORB: { hoverIntensity: 0, rotateOnHover: false, hue: 34 },
};

const HISTORY = [
  '광주 테크노파크 기업 AI 교육',
  '삼성 멀티캠퍼스 - 새싹 도봉캠퍼스 교육',
  '',
  '청년취업사관학교 새싹(Sesac) 성동캠퍼스 클라우드 기반 자바 풀 스택 과정',
  '청년취업사관학교 새싹(Sesac) 서초캠퍼스 AI 기반 데이터분석 과정',
  '청년취업사관학교 새싹(Sesac) 송파캠퍼스 비즈니스 AI 데이터분석 과정',
  '',
  '경남대학교 동계 계절학기 코딩테스트 대비반',
  '아주대학교 동계방학 코딩캠프',
  '이화여자대학교 파이썬 특강',
  '',
  '새싹 성동, 강동, 영등포, 도봉, 동대문 코딩테스트 대비 교육',
  '새싹 용산, 금천캠퍼스 파이썬 프리코스',
  '',
  '프로그래머스 PCCE, PCCP 알고리즘 특강',
  '주식회사 천재교육 K-Digital Training 강의',
  '',
  '삼성 청년 소프트웨어 아카데미(SSAFY) 1~9기 강의',
] as const;

const PIXEL_CARD_ITEMS = [
  {
    Icon: RiPresentationFill,
    title: 'SW, AI 강사진',
    content: [
      '(현) 청년취업사관학교(SeSAC) 강사진',
      '삼성청년소프트웨어아카데미(SSAFY) 교수 출신',
      'K-Digital Training 및 주요 대학 다수 강의',
    ] as const,
  },
  {
    Icon: RiTeamFill,
    title: '현직 개발자',
    content: [
      'AI 기반 코딩 교육 솔루션 자체 개발',
      '알고리즘 문제 풀이 서비스 DailyAlgo개발',
      '자체 학습 관리 시스템(LMS) 개발',
    ] as const,
  },
] as const;

const ICON_SIZE = 64;

type PielxCardProps = {
  Icon: RemixiconComponentType;
  title: string;
  content: readonly string[];
  size: number;
};

function PixelCardItem({ Icon, title, content, size }: PielxCardProps) {
  return (
    <PixelCard className="h-95 bg-background-normal-normal rounded-4xl max-w-110 md:max-w-134 w-full p-8 md:p-16">
      <div className="flex h-full w-full items-center justify-center md:justify-start">
        <div className="flex flex-col gap-10">
          <header>
            <div className="flex flex-col gap-4">
              <div className="icon-primary-radial-gradient">
                <Icon size={size} />
              </div>
              <p className="text-primary-radial-gradient typography-display2-bold">
                {title}
              </p>
            </div>
          </header>
          <main className="flex flex-col gap-1 sm:gap-0">
            {content.map((c, idx) => (
              <p
                key={idx}
                className="typography-headline1-bold text-label-neutral"
              >
                {c}
              </p>
            ))}
          </main>
        </div>
      </div>
    </PixelCard>
  );
}
export default function CompanyPage() {
  return (
    <main className="break-keep">
      <SvgRadialGradient />
      <section className="bg-static-black relative h-dvh">
        <div className="absolute inset-0">
          <Galaxy {...REACT_BITS.GALAXY} />
        </div>
        <div className="pointer-events-none relative z-10 flex h-full items-center justify-center">
          <h1 className="typography-display1-bold text-primary-radial-gradient flex flex-col items-center">
            <span>교육에 대한 진심</span>
            <span>기술에 대한 깊이</span>
          </h1>
        </div>
      </section>

      <section className="shadow-emphasize bg-primary-radial-gradient py-30 typography-title3-bold text-static-white flex justify-center gap-2.5 px-5">
        <div className="flex flex-col gap-1 sm:gap-0">
          <p>노드크루는 SW, AI 교육의 본질을 고민하는 팀입니다.</p>
          <p>
            최고의 강사진과 현직 개발진의 시너지를 통한 수준 높은 교육으로
            새로운 기준을 만듭니다.
          </p>
        </div>
      </section>

      <section className="bg-static-black min-h-215.5 relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 sm:h-1/2 md:inset-0 md:h-auto">
          <Orb {...REACT_BITS.ORB} />
        </div>
        <div className="py-30 relative z-10 flex w-full flex-col gap-16 px-5">
          <div className="typography-display2-bold text-static-white flex items-center justify-center">
            <h2 className="flex flex-col gap-2 md:flex-row">
              <div>최고의 교육은</div>
              <div>
                <span className="text-primary-radial-gradient">최고의 팀</span>
                에서 시작됩니다
              </div>
            </h2>
          </div>
          <div className="typography-title3-Bold text-static-white flex flex-col items-center justify-center">
            <div className="text-start md:text-center">
              <p>노드크루의 교육은 국내 최상위 SW, AI 강사진과</p>
              <p>
                자체 교육 솔루션을 개발하는 현직 개발진으로 이루어진 팀입니다.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 md:gap-8 lg:flex-row">
            {PIXEL_CARD_ITEMS.map((item, idx) => (
              <PixelCardItem key={idx} size={ICON_SIZE} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-30 flex w-full flex-col items-center justify-center gap-8 px-2 md:flex-row md:items-start md:gap-16 md:px-5">
        <div className="flex flex-col items-center gap-2.5 py-10 md:items-start">
          <Logo {...LOGO_SIZE} />
          <p className="typography-title2-bold text-label-normal">
            주요 교육 이력
          </p>
        </div>
        <div className="shadow-emphasize bg-background-normal-normal rounded-4xl max-w-198 text-static-black flex flex-col gap-6 p-6 md:p-16">
          {HISTORY.map((history, idx) =>
            history ? (
              <p
                key={idx}
                className="typography-headline1-bold md:typography-heading1-bold"
              >
                {history}
              </p>
            ) : (
              <hr key={idx} className="text-line-normal-normal" />
            ),
          )}
        </div>
      </section>
      <ContactInquiryForm />
    </main>
  );
}
