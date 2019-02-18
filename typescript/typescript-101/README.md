## run code
```sh
npm install -g parcel-bundler #if parcel-bundler not installed globally
parcel index.html
parcel index.ts --target=node
```

## Typescript itself

```sh
npm i -g typescript
tsc --help
# get tsconfig.json
tsc --init
# config outDir from tsconfig.json and run tsc
tsc
```

* typescript file:
```typescript
export const one = 1
```

* commonjs way:

```javascrpt
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.one = 1;
```

* ex2015 way

```javascript
export var one = 1;
```

## how to write function with typescript

exampe:  [index.ts](./index.ts)