// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testTimeout: 30000,
    testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
  };
  