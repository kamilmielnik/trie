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

It's a type (TypeScript-only).

```ts
import { Node } from '@kamilmielnik/trie';
````

#### Properties

- `[key: string]: Node`

  `key` is a single character (string of length 1).

- `wordEnd?: true`

  Indicates that keys of all parent nodes make a valid word when joined together.

### Trie

A `class` representing the [Trie](https://en.wikipedia.org/wiki/Trie) data structure.

#### Import

```ts
import Trie from '@kamilmielnik/trie';
````

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

  It serializes 41 MB [Polish](https://en.wikipedia.org/wiki/Polish_language) [dictionary](https://sjp.pl/slownik/growy/) down to 15 MB (63%).

  It serializes 1.9 MB [English (US)](https://en.wikipedia.org/wiki/American_English) [dictionary](https://www.wordgamedictionary.com/twl06/download/twl06.txt) down to 1.2 MB (37%).

  It serializes 2.9 MB [English (GB)](https://en.wikipedia.org/wiki/British_English) [dictionary](https://www.wordgamedictionary.com/sowpods/download/sowpods.txt) down to 1.8 MB (38%).

- `Trie.prototype.toJson(): Node`

  Returns the root `Node` of the `Trie`. It's not a copy, it's not safe to mutate (due to performance optimization).
