# How to reproduce the bug

1. Clone this repo
2. `npm i`
3. `./node_modules/.bin/webpack`
4. Observe in `./dist/x.bundle.js` that the `/* webpackIgnore: true */` comment had no effect.
