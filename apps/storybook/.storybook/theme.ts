import { create, themes } from '@storybook/theming/create';

const DailyalgoTheme = create({
  base: 'dark',
  brandTitle: 'DailyAlgo Design System',
  brandUrl: 'https://dev.dailyalgo.kr',
  brandImage:
    'https://s3.ap-northeast-2.amazonaws.com/dailyalgo.kr/logo-text-blue.png',
  brandTarget: '_self',
}) as typeof themes.dark;

export default DailyalgoTheme;
