# light-uid

A lightweight random uid generator which can be used both with JavaScript and TypeScript.

[![NPM](https://img.shields.io/npm/v/light-uid.svg)][npm-light-uid]
[![Minzipped Bundle Size](https://badgen.net/bundlephobia/minzip/light-uid)][bundlephobia-link]

## Install

with npm
```
npm i -s light-uid
```

with yarn
```
yarn add light-uid
```

## Usage

JavaScript and TypeScript
```javascript
import genUid from 'light-uid';

genUid(); // r8oi9pyhxt1xujmh
genUid(4); // 9no5
genUid(8); // rucg9mf5

genUid(256).length; // 256
```

## License

MIT © [hakobpogh][github-hakobpogh]

[github-hakobpogh]: https://github.com/hakobpogh
[npm-light-uid]: https://www.npmjs.com/package/light-uid
[bundlephobia-link]: https://bundlephobia.com/result?p=light-uid
