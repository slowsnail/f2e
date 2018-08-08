module.exports = {
  "extends": ["eslint-config-airbnb"],
  "parser": "babel-eslint",
  'rules': {
    'global-require':'off',
    'func-names':'off',

    /* ------- JS 相关 -------- */

    /**
     * @off  允许使用 console.log
     * babel 插件已会清除 console.log
     */
    'no-console': 'off',

    semi: ["error", "never"],

    /**
     * @error 不允许下划线命名
     * 并不是私有变量，还让人以为调用私有变量/方法会有问题
     * https://github.com/airbnb/javascript/issues/1024
     */
    'no-underscore-dangle': 'error',

    /**
     * @error 代码最终不超过 100 个字符
     */
    'max-len': ['error', { 'code': 100 }],

    /**
     * @error 使用 for in 不使用 hasOwnProperty 检查
     * for in 会检查原型对象，可能不符合预期
     */

    'guard-for-in': 'error',

    /**
     * @off 允许箭头函数只有单个参数时，不写括号
     */
    'arrow-parens':'off',

    /**
     * @error 给函数参数赋值，单允许添加属性
     */
    'no-param-reassign': ['error', { 'props': true }],

    /**
     * @error 使用驼峰命名
     */
    camelcase: 'error',

    /**
     * @error 构造函数必须 new，以区分和函数的区别
     * Immutable Map List 忽略
     */
    'new-cap': ["error", { "capIsNewExceptions": ["Map", 'List'] }],

    /**
     * @error 不允许位运算符
     * 难以理解，容易和 && || 混淆
     */
    'no-bitwise': 'error',

    /**
     * @error 不允许将if语句作为 else 块中的唯一语句
     */
    'no-lonely-if': "error",

    /**
     * @error 不允许嵌套的三元表达式
     * 会使代码更难理解
     */
    'no-nested-ternary': "error",

    /**
     * @error 在需要的地方箭头函数在写函数 body
     */
    'arrow-body-style': ["error", "as-needed"],

    /**
     * @error 不要在可能与比较运算符混淆的地方使用箭头函数语法
     */
    'no-confusing-arrow': "error",

    /**
     * @error 函数总是或者永不返回值
     * 例如如果某条件返回值了，其他分支也必须返回值
     * 某些分支不显式返回值，有可能是输入错误
     */
    'consistent-return': "error",

    /* ------- React 相关 -------- */

    /**
     * @off 必须使用无状态组件
     * 原因见 prefer-es6-class
     */
    'react/prefer-stateless-function': 'off',
    /**
     * @error 必须使用 Class 的形式创建组件
     * 统一组件风格，一般情况下组件都较复杂
     * 需要拆分出函数，使用无状态组件写出的代码缺乏整体感
     */
    'react/prefer-es6-class': [
      'error',
      'always'
    ],
    /**
     * @error 组件必须写 propTypes
     * propTypes 即是组件的文档说明
     */
    'react/prop-types': [
      'error',
    ],

    /**
     * @warn 太严格
     * 纯展示列表其实可以使用
     */
    'react/no-array-index-key': 'warn',

    /**
     * @error 禁止在 didMount 中使用 setState
     */
    'react/no-did-mount-set-state': 'off',

    /**
     * @error 禁止直接修改 state
     */
    'react/no-direct-mutation-state': 'error',

    /**
     * @error React模块名使用帕斯卡命名，实例使用骆驼式命名
     */
    'react/jsx-pascal-case': 'error',

    /**
     * @off jsx 文件 jsx js 结尾都可以
     */
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],

    // @off 自闭和标签的反尖括号必须与尖括号的那一行对齐
    'react/jsx-closing-bracket-location': [
      'error',
      {
          nonEmpty: false,
          selfClosing: 'line-aligned'
      }
    ],

    /**
     * @error 如果属性值为 true, 可以直接省略
     */
    'react/jsx-boolean-value': 'error',

    /**
     * @error 官方文档已废弃
     */
    'react/no-string-refs': 'error',

    /**
     * @warn 多行 jsx 写在括号里
     * 不要求
     */
    'react/jsx-wrap-multilines': 'warn',

    /**
     * @error 没有子元素的标签自己闭合标签
     */
    'react/self-closing-comp': 'error',

    /**
     * @error 函数提前绑定，不允许在 jsx 中使用 bind
     */
    'react/jsx-no-bind': 'error',

    /**
     * @error render 中总是确保有返回值
     */
    'react/require-render-return': 'error',

    /**
     * @error 【重要】规范组件方法顺序
     */
    'react/sort-comp': 'error'
  }
}
