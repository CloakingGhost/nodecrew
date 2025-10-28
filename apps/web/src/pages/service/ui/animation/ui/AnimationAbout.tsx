export default function AnimationAbout() {
  return (
    <section className="h-256 py-30 flex items-center justify-center sm:px-10">
      <div className="flex w-3/4 flex-col gap-4 sm:gap-10 lg:w-full">
        <h2 className="text-inverse-primary flex flex-col items-start gap-2 md:items-start">
          <div className="typography-heading1-bold sm:typography-title2-bold lg:typography-display2-bold flex flex-col md:inline">
            <span>최적의 학습 경험을&nbsp;</span>
            <span>설계하는 교육 플랫폼</span>
          </div>
          <div className="typography-title1-bold sm:typography-display2-bold lg:typography-display1-bold">
            DailyAlgo LMS
          </div>
        </h2>
        <div className="typography-headline1-bold  md:typography-heading1-bold text-static-white lg:flex lg:flex-col lg:gap-1">
          <span>
            노드크루는 교육의 모든 과정을 하나의 공간에 담아냈습니다.&nbsp;
          </span>
          <span>
            자체 개발 학습관리시스템(LMS) &lsquo;데일리알고&rsquo;를 통해 교육
            운영의 효율을 높이고,
          </span>
          <span>학습 몰입도를 극대화하는 최상의 교육 환경을 제공합니다.</span>
        </div>
      </div>
    </section>
  );
}
