module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  verbose: true
};
