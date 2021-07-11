module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    jsx: true,
    useJSXTextNode: true,
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true
    }
  },
  rules: {
    'import/extensions': [
      0,
      'never',
      {
        ignorePackages: true
      }
    ],
    'spaced-comment': [
      'error',
      'always'
    ],
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore'
      }
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '_id'
        ]
      }
    ],
    camelcase: [
      'error',
      {
        allow: [
          'oauth2_v2',
          'user_id'
        ],
        properties: 'never'
      }
    ],
    'func-names': [
      'error',
      'never'
    ],
    'arrow-parens': [
      'error',
      'as-needed'
    ],
    semi: 'error',
    'no-extra-semi': 0,
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.ts',
          '**/*.spec.ts'
        ]
      }
    ],
    'no-unused-vars': 'off',
    'dot-notation': 'off',
    'class-methods-use-this': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'ignore'
      }
    ],
    'handle-callback-err': 'error',
    quotes: [
      'error',
      'single'
    ]
  },
  overrides: [
    {
      files: [
        '**/*.ts'
      ],
      parser: '@typescript-eslint/parser',
      rules: {
        'no-undef': 'off'
      }
    }
  ],
  extends: [
    'eslint:recommended',
    'airbnb-base'
  ],
  plugins: [
    '@typescript-eslint'
  ],
  settings: {}
};
