/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  modulePathIgnorePatterns: ['/lib'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts?(x)'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  coverageReporters: ['lcov', 'html', 'json'],
  coveragePathIgnorePatterns: [
    '.*/__tests__/.*',
    '.*/mocks/.*',
    '.*/config/.*',
    '.*/build/.*',
    '.*/.storybook/.*',
    '.stories.',
  ],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        diagnostics: false,
        tsconfig: 'tsconfig.json',
        isolatedModules: false,
      },
    ],
  },
};
