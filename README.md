# @typescript-eslint/no-unused-vars jsxFactory issue

1. Clone this repo.
2. Install dependencies: `npm ci`.
3. Run TypeScript and ESLint: `npm test`.

```
❯ npm test

> test
> tsc && eslint .


/Users/lydell/stuff/typescript-eslint-preact/index.tsx
  1:10  error  'h' is defined but never used         @typescript-eslint/no-unused-vars
  1:13  error  'Fragment' is defined but never used  @typescript-eslint/no-unused-vars
```

Expected: No errors.

Actual: No errors.

Now switch to the `previous` branch. It uses @typescript-eslint 5.26.0 instead of 5.27.0.
On that branch there are no errors!
