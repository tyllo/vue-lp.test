module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:import/recommended',
    'airbnb-base',
  ],
  plugins: [
    'vue',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['index.js', '.js', '.vue', '.json']
      }
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 1,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 1,

    'sort-imports': 'off',
    'no-plusplus': [0, { 'allowForLoopAfterthoughts': true }],
    'no-void': 0,
    'default-case': 0,
    'max-len': ['error', {
      'code': 120,
      'ignoreComments': true,
      'ignoreUrls': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true
    }],
    'no-param-reassign': ['error', {
      'props': true,
      'ignorePropertyModificationsFor': [
        'state',
        'acc',
        'e'
      ]
    }],

    'import/first': 0,
    'import/order': [0, {
      'groups': ['builtin', 'external', 'parent', 'sibling', 'index'],
      'newlines-between': 'never'
    }],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/no-unresolved': 2,
    'import/no-cycle': 2,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/extensions': ['error', {
      'js': 'never',
      'json': 'always',
      'vue': 'always',
    }],

    'vue/require-default-prop': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 5,
      multiline: { max: 1, allowFirstLine: false },
    }],
    'vue/name-property-casing': ['error', 'kebab-case'],
    'vue/prop-name-casing': 'off',
    'vue/no-v-html': 'off',
    'vue/this-in-template': ['error', 'never'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/order-in-components': ['error', {
      order: [
        'el',
        'name',
        'parent',
        'functional',
        'validations',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ]
    }],
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'always'
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      'selfClosingTag': 'always',
    }],
  },
};
