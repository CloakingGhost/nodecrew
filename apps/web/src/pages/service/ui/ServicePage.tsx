'use client';

import Image from 'next/image';

import { RiSparkling2Fill } from '@remixicon/react';

import { ContactInquiryForm } from '@/features/contact-inquiry';

import { SvgPinkAccentMiniLinear } from '@/shared/ui';

import { ScrollVideoAnimation } from './animation';
import { VideoPlayer } from './video';

const MEDIA_SOURCES = {
  CLASS_ROOM: {
    src: '/assets/images/class-room.webp',
    alt: 'Class Room',
    width: 900,
    height: 600,
  },
  LECTURE: {
    src: '/assets/images/lecture.webp',
    alt: 'Lecture',
    width: 900,
    height: 600,
  },
  TOP_BAR: {
    DRAK: {
      src: '/assets/images/top-bar-dark.svg',
      alt: 'Top Bar',
      width: 900,
      height: 56,
    },
    WHITE: {
      src: '/assets/images/top-bar-white.svg',
      alt: 'Top Bar',
      width: 900,
      height: 56,
    },
  },
};
export default function ServicePage() {
  return (
    <main className="break-keep">
      <SvgPinkAccentMiniLinear />
      <section>
        <ScrollVideoAnimation />
      </section>
      <section className="py-15 sm:py-30 flex items-center justify-center px-5">
        <div className="max-w-275 flex w-full flex-col gap-8 sm:gap-16">
          {/* content */}
          <div className="text-label-normal flex flex-col gap-5">
            <h3 className="typography-title3-bold sm:typography-title2-bold md:typography-display1-bold">
              <span className="text-primary-normal">클래스룸&nbsp;</span>종합
              관리
            </h3>
            <div className="typography-body2-normal-bold sm:typography-headline2-bold md:typography-heading1-bold sm:flex sm:flex-col">
              <span>과정 개설, 수강생 관리, 공지사항 전달까지&nbsp;</span>
              <span>교육 담당자는 반복적인 관리 업무에서 벗어나&nbsp;</span>
              <span>교육의 본질에 더 집중할 수 있습니다.</span>
            </div>
          </div>
          {/* media */}
          <div className="flex flex-col md:items-end">
            <div className="max-w-225 shadow-media w-full">
              <Image
                {...MEDIA_SOURCES.TOP_BAR.WHITE}
                className="h-auto w-full object-contain"
              />
              <Image
                {...MEDIA_SOURCES.CLASS_ROOM}
                className="h-auto w-full rounded-b-lg object-contain md:rounded-b-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-15 sm:py-30 flex items-center justify-center px-5">
        <div className="max-w-275 flex w-full flex-col gap-8 sm:gap-20">
          {/* content */}
          <div className="text-label-normal flex flex-col items-start gap-5 text-start sm:items-end sm:text-end">
            <h3 className="typography-title3-bold sm:typography-title2-bold md:typography-display1-bold">
              <div>
                <span>온라인 기반&nbsp;</span>
                <span className="text-primary-normal">교재 열람</span>
              </div>
              <div>
                <span className="text-primary-normal">강의 영상&nbsp;</span>
                다시보기
              </div>
            </h3>
            <div className="typography-body2-normal-bold sm:typography-headline2-bold md:typography-heading1-bold sm:flex sm:flex-col">
              <span>잘 정리된 온라인 교재와 고화질 강의 영상을 통해&nbsp;</span>
              <span>수강생들은 예습과 복습을 자유롭게 진행할 수 있습니다.</span>
            </div>
          </div>
          {/* media */}
          <div className="flex flex-col md:items-start">
            <div className="max-w-225 shadow-media w-full">
              <Image
                {...MEDIA_SOURCES.TOP_BAR.WHITE}
                className="h-auto w-full object-contain"
              />
              <Image
                {...MEDIA_SOURCES.LECTURE}
                className="h-auto w-full rounded-b-lg object-contain md:rounded-b-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-inverse-background py-15 sm:py-30 flex items-center justify-center overflow-hidden px-5">
        <div className="max-w-275 flex w-full flex-col gap-8 sm:gap-16">
          {/* content */}
          <div className="text-static-white flex flex-col gap-5">
            <h3 className="typography-title3-bold sm:typography-title2-bold md:typography-display1-bold flex flex-col sm:flex-row sm:gap-2">
              <div className="flex gap-2 self-start">
                <span className="flex items-center justify-center">
                  <RiSparkling2Fill className="text-pink-accent-mini md:size-13 sm:size-7" />
                </span>
                <span className="text-pink-accent-mini-linear flex items-center justify-center">
                  AI
                </span>
              </div>
              문제풀이 및 테스트 환경
            </h3>
            <div className="typography-body2-normal-bold sm:typography-headline2-bold md:typography-heading1-bold sm:flex sm:flex-col">
              <span>
                실제 코딩테스트와 유사한 공간에서 코드를 직접 작성하고,&nbsp;
              </span>
              <span>제출 즉시 채점 결과를 확인할 수 있습니다.&nbsp;</span>
              <span>
                특히 AI 기반 디버깅 챗봇은 수강생 스스로 문제 해결 능력을
                기르도록 돕는&nbsp;
              </span>
              <span>최적의 학습 파트너입니다.</span>
            </div>
          </div>
          {/* media */}
          <div className="shadow-ai max-w-225 w-full self-end">
            <Image
              {...MEDIA_SOURCES.TOP_BAR.DRAK}
              className="h-auto w-full object-contain"
            />
            <VideoPlayer className="w-full rounded-b-lg md:rounded-b-2xl" />
          </div>
        </div>
      </section>
      <ContactInquiryForm />
    </main>
  );
}
