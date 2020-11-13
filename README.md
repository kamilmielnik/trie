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

### Trie

A `class` representing the [Trie](https://en.wikipedia.org/wiki/Trie) data structure.

#### Import

```ts
import Trie from '@kamilmielnik/trie';
```

#### Static functions

- `Trie.deserialize(serialized: string): Trie`

  Creates a new `Trie` by deserializing given `string`.
  The inverse of `Trie.prototype.serialize`.

- `Trie.fromArray(words: string[]): Trie`

  Creates a new `Trie` based on array of `words`.

#### Instance properties

- `root: Node`

  Readonly property. Returns the root `Node` of the `Trie`. It's not a copy. Mutate at your own risk.

#### Instance methods

- `Trie.prototype.add(word: string): Node`

  Inserts `word` into the `Trie`.
  Returns `Node` representing last character in the word.

- `Trie.prototype.find(prefix: string): Node | undefined`

  Returns `Node` representing a given `prefix`.
  Returns `undefined` if there is no such Node.

- `Trie.prototype.has(word: string): boolean`

  Returns `true` if given `word` is in the `Trie`.

- `Trie.prototype.hasPrefix(prefix: string): boolean`

  Returns `true` if there are any words with given [`prefix`](https://en.wikipedia.org/wiki/String_operations#Prefixes) in the `Trie`.

- `Trie.prototype.remove(word: string): boolean`

  Removes word from the `Trie` if it exists.
  Returns `true` if `word` was removed.

- `Trie.prototype.serialize(): string`

  Converts `Trie` into a string.
  The inverse of `Trie.deserialize`.

  It serializes 41 MB [Polish](https://en.wikipedia.org/wiki/Polish_language) [dictionary](https://sjp.pl/slownik/growy/) down to 12 MB (-71%).

  It serializes 1.9 MB [English (US)](https://en.wikipedia.org/wiki/American_English) [dictionary](https://www.wordgamedictionary.com/twl06/download/twl06.txt) down to 993 KB (-48%).

  It serializes 2.9 MB [English (GB)](https://en.wikipedia.org/wiki/British_English) [dictionary](https://www.wordgamedictionary.com/sowpods/download/sowpods.txt) down to 1.5 MB (-49%).

### Node

It's a type (TypeScript-only).

```ts
import { Node } from '@kamilmielnik/trie';
```

#### Properties

- `[key: string]: Node`

  `key` is a single character (string of length 1).

- `wordEnd?: true`

  Indicates that keys of all parent nodes make a valid word when joined together.
