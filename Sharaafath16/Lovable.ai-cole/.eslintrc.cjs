module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'plugin:tailwindcss/recommended', 'prettier'],
  plugins: ['tailwindcss'],
  rules: {
    'tailwindcss/classnames-order': 'warn',
  },
}
