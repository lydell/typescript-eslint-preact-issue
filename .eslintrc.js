module.exports = {
  plugins: [
    "@typescript-eslint",
  ],
  overrides: [
    {
      files: ["*.{ts,tsx}"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
      },
      rules: {
        "@typescript-eslint/no-unused-vars": "error",
      },
    },
  ],
};
