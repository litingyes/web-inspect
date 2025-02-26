import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  react: true,
  rules: {
    'no-console': 1,
  },
  ignores: [
    './pnpm-lock.yaml',
  ],
})
