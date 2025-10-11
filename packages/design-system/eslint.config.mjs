import { config as configReact } from '@nodecrew/eslint-config/react';

/** @type {import("eslint").Linter.Config} */
export default [
  ...configReact,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
];
