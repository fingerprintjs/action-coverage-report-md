module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  verbose: true,
  collectCoverageFrom: ['./src/**/**.{ts,tsx}'],
  coverageReporters: [['text', { file: 'coverage.txt', path: './' }]],
}