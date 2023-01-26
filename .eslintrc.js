module.exports = {
  root: true,
  extends: ['@js-omar/eslint-config/.eslintrc.base.js'],
  overrides: [
    {
      files: ['*.ts'],
      extends: [
        '@js-omar/eslint-config/.eslintrc.typescript.js',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
      ],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
      rules: {
        '@angular-eslint/directive-selector': [
          'error',
          { type: 'attribute', prefix: 'lms', style: 'camelCase' },
        ],
        '@angular-eslint/component-selector': [
          'error',
          { type: 'element', prefix: 'lms', style: 'kebab-case' },
        ],
      },
    },
    {
      files: ['*.js', '*.jsx'],
      extends: ['@js-omar/eslint-config/.eslintrc.javascript.js'],
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {},
    },
  ],
  ignorePatterns: ['node_modules', 'tmp', 'android', 'ios', 'dist'],
};
