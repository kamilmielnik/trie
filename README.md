# @kamilmielnik/trie

![Version](https://img.shields.io/github/package-json/v/kamilmielnik/trie)
![Dependencies](https://img.shields.io/david/kamilmielnik/trie)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/kamilmielnik/trie)
![Test](https://github.com/kamilmielnik/trie/workflows/Test/badge.svg)
![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)
![Prettier](https://github.com/kamilmielnik/fuck-npm/workflows/Prettier/badge.svg)

[Trie](https://en.wikipedia.org/wiki/Trie) data structure implementation (in TypeScript).
Highly performant. No dependencies. Built for a [Scrabble Solver](https://github.com/kamilmielnik/scrabble-solver).

# Installation

```Shell
npm install @kamilmielnik/trie --save
```

# Usage

```ts
import Trie from '@kamilmielnik/trie';

const trie = new Trie();
trie.add('master');
trie.add('mask');
console.log(trie.hasPrefix('man')); // false
console.log(trie.hasPrefix('mas')); // true
console.log(trie.has('mas')); // false
console.log(trie.remove('mas')); // false
console.log(trie.has('master')); // true
console.log(trie.serialize()); // "(m(a(s(t(e(r))k))))"
console.log(trie.remove('master')); // true
console.log(trie.serialize()); // "(m(a(s(k))))"
```

## API

[API Docs](docs/README.md)

There are 2 ways to use API:

- [object-oriented](docs/README.md#classes) -create `Trie` instance and use its' instance methods
- [functional](docs/README.md#functions) - manipulate existing instances of `Node`
