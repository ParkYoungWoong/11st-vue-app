// 각자 사용하는 에디터 옵션에서 '자동 수정' 기능을 끌 수 있습니다!

module.exports = {
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  extends: [
    'plugin:vue/strongly-recommended'
  ],
  rules: {
    'vue/html-closing-bracket-newline': ['error', {
      multiline: 'never'
    }],
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'never',
        component: 'never'
      }
    }]
  }
}
