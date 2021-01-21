// 각자 사용하는 에디터 옵션에서 '자동 수정' 기능을 끌 수 있습니다!

// WebStorm
// Preferences > Languages & Frameworks > JavaScript > Code Quality Tools > ESLint >> Run eslint --fix on save

// VS Code
// ...

module.exports = {
  // 지원하려는 JS 언어 옵션을 지정!
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  extends: [
    // https://eslint.vuejs.org/rules/#priority-b-strongly-recommended-improving-readability-for-vue-js-3-x
    'plugin:vue/strongly-recommended'
  ],
  rules: {
    // https://eslint.vuejs.org/rules/html-closing-bracket-newline.html
    'vue/html-closing-bracket-newline': ['error', {
      multiline: 'never'
    }],
    // https://eslint.vuejs.org/rules/html-self-closing.html
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always', // E.g, <br />
        normal: 'never', // E.g, <div></div>
        component: 'never' // E.g, <my-comp></my-comp>
      }
    }]
  }
}
