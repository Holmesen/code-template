module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'google',
    'prettier',
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module',
    'project': './tsconfig.eslint.json',
  },
  'plugins': [
    'vue',
    '@typescript-eslint',
    'prettier',
  ],
  'rules': {
    'prettier/prettier': 'error',
  },
};
