# parcel hmr dependency bug

https://github.com/parcel-bundler/parcel/issues/1232

```
yarn
yarn run serve
```

HMR should be activated and you can change the literal string in `src/view.js`.
However, updating the value of `value` in `src/model.js` updates it in the console from `index.js` but the `view` module does not get updated, even though it depends on this value.

Removing the import of `model` (and its console output) from `src/index.js` makes `view` reload `model` when it is updated.

