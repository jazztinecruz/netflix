module.exports = {
  importOrder: ['^@/core/(.*)$', '^[./]'],
  importOrderSeparation: true,
  singleQuote: true,
  printWidth: 120,
  semi: false,
  trailingComma: 'all',
  plugins: ['@trivago/prettier-plugin-sort-imports'],
}
