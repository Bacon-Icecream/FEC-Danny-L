module.exports = {
    setupFiles: ['<rootDir>/test/shim.js','<rootDir>/test/setup.js'],
    testURL: 'http://localhost',
    "verbose": true,
    "moduleDirectories": ["node_modules", "src"],
    transform: {
        "^.+\\.jsx?$": "babel-jest",
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
        'jest-transform-stub'
      }
}