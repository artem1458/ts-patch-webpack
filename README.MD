This repo contains `customTransformer.js` file
which is custom typescript transformer that is adding `ts.Diagnostic`
using ts-patch API.

`webpack.config.js` is using `ts-loader` to compile `src/index.ts` file.
`vite.config.ts` is using `rollup-plugin-typescript2` to compile `index.html` file that is importing `./src/index.ts` file.

To run compilation with webpack - run following package.json script: `build:webpack`.

To run compilation with vite - run following package.json script: `build:vite`.

To run compilation with patched typescript compiler - run following package.json script: `build:tsc`.

Transformer runs console.log to show that it is used.

Output from `build:tsc` script (failed as expected):
```sh
Custom transformer is working
src/index.ts:1:7 - error TS1: MyCustomTransformationError

1 class Foo {}
        ~~~


Found 1 error in src/index.ts:1
```

Output from `build:webpack` script (not failing build):
```sh
Custom transformer is working

Custom transformer is working
asset main.js 1.23 KiB [emitted] (name: main)
./src/index.ts 28 bytes [built] [code generated]
webpack 5.89.0 compiled successfully in 725 ms

```

Output from `build:vite` script (not failing build):
```sh
vite v5.0.5 building for production...
transforming (1) index.html
Custom transformer is working
✓ 3 modules transformed.
dist/index.html                0.40 kB │ gzip: 0.27 kB
dist/assets/index-0d4UnAVa.js  1.57 kB │ gzip: 0.59 kB
✓ built in 632ms
```
