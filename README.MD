This repo contains `customTransformer.js` file
which is custom typescript transformer that is adding `ts.Diagnostic`
using ts-patch API.

`webpack.config.js` is using `ts-loader` to compile `src/index.ts` file.

to run compilation with webpack - run following package.json script: `build:webpack`.

to run compilation with patched typescript compiler - run following package.json script: `build:tsc`.

Transformer runs console.log to show that it is used.

When running `build:tsc` you will see following error:
```sh
Custom transformer is working
src/index.ts:1:7 - error TS1: MyCustomTransformationError

1 class Foo {}
        ~~~


Found 1 error in src/index.ts:1
```

When running `build:webpack` you will won't see any error:
```sh
Custom transformer is working
Custom transformer is working
asset main.js 1.23 KiB [compared for emit] (name: main)
./src/index.ts 28 bytes [built] [code generated]
webpack 5.89.0 compiled successfully in 1287 ms
```
