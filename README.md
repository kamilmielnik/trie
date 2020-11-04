# @kamilmielnik/trie

![Version](https://img.shields.io/github/package-json/v/kamilmielnik/trie)
![Dependencies](https://img.shields.io/david/kamilmielnik/trie)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/kamilmielnik/trie)
![Test](https://github.com/kamilmielnik/trie/workflows/Test/badge.svg)
![Prettier](https://github.com/kamilmielnik/fuck-npm/workflows/Prettier/badge.svg)

[Trie](https://en.wikipedia.org/wiki/Trie) data structure implementation (in TypeScript).
Highly performant.
Built for a [Scrabble Solver](https://github.com/kamilmielnik/scrabble-solver).

# Installation

```Shell
npm install --save @kamilmielnik/trie
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
console.log(trie.has('master')); // true
console.log(trie.serialize()); // "(m(a(s(t(e(r)),k))))"
```

## API

### Node

#### Properties

- `[key: string]: Node`

  `key` is a single character (string of length 1).

- `wordEnd?: true`

  Indicates that keys of all parent nodes make a valid word when joined together.

### Trie

#### Static functions

- `Trie.deserialize(serialized: string): Trie`

  The inverse of `Trie.prototype.serialize`.

- `Trie.fromArray(words: string[]): Trie`

  Builds a `Trie` instance based on array of words.

#### Instance methods

- `Trie.prototype.add(word: string): void`

  Inserts `word` into the `Trie` instance.

- `Trie.prototype.has(word: string): boolean`

  Returns `true` if given `word` is in the `Trie` instance.

- `Trie.prototype.hasPrefix(prefix: string): boolean`

  Returns `true` if there are any words with given [`prefix`](https://en.wikipedia.org/wiki/String_operations#Prefixes).

- `Trie.prototype.serialize(): string`

  The inverse of `Trie.deserialize`.

- `Trie.prototype.toJson(): Node`

  Returns the root `Node` of the `Trie`. It's not a copy, it's not safe to mutate (due to performance optimization).
