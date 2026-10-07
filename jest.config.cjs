module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    'Data/notes$': '<rootDir>/tests/mocks/notes.js',
    '^react-markdown$': '<rootDir>/tests/mocks/react-markdown.jsx',
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
}
