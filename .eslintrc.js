module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    // import 時に js, jsx, ts, tsx の拡張子を読み込めるようにする
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    // warn と error はメッセージとして使いたいのでワーニング対象から外す
    'no-console': [1, { allow: ['warn', 'error'] }],

    // import 時に js, jsx, ts, tsx の拡張子を読み込めるようにする
    'import/extensions': [2, 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],

    // export default 必須にする必要はない
    'import/prefer-default-export': 0,

    // next/link と相性悪いので辛い(https://github.com/vercel/next.js/issues/5533)
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/402#issuecomment-368305051
    'jsx-a11y/anchor-is-valid': [2, {
      components: ['Link'],
      specialLink: ['hrefLeft', 'hrefRight'],
      aspects: ['invalidHref', 'preferButton'],
    }],

    // JSX の記法 を TSX の拡張子も許可する
    'react/jsx-filename-extension': [2, {
      extensions: ['.jsx', '.tsx'],
    }],

    // カスタムcomponentに対してはめんどくさいので許容する
    'react/jsx-props-no-spreading': [2, {
      html: 'enforce',
      custom: 'ignore',
      explicitSpread: 'enforce',
    }],

    // 新しいトランスパイルで無視できるようになったので消した
    // https://ja.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,

    // TypeScript導入しているので黙らせる
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/prop-types': 0,
  },
};
