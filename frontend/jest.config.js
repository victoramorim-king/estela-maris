module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'], // If you have any setup files
  globals: {
    'process.env.NODE_ENV': 'test',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!esm)'], // Exclude 'esm' from transformIgnorePatterns
};
