# @kamilmielnik/trie

## Installation

```Shell
npm install --save @kamilmielnik/trie
```

## Usage

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

### API

#### Node

##### Properties

- `[key: string]: Node`

  `key` is a single character (string of length 1)

- `wordEnd?: true`

  Indicates that keys of all parent nodes make a valid word when joined together.

#### Trie

##### Static functions

- `Trie.deserialize(serialized: string): Trie`

  The inverse of `Trie.prototype.serialize`.

- `Trie.fromArray(words: string[]): Trie`

  Builds a `Trie` instance based on array of words.

##### Instance methods

- `Trie.prototype.add(word: string): void`

  Inserts `word` into the `Trie` instance.

- `Trie.prototype.has(word: string): boolean`

  Returns `true` if there is a

- `Trie.prototype.hasPrefix(prefix: string): boolean`

  Returns `true` if there are any words with given [`prefix`](https://en.wikipedia.org/wiki/String_operations#Prefixes).

- `Trie.prototype.serialize(): string`

  The inverse of `Trie.deserialize`.

- `Trie.prototype.toJson(): Node`

  Returns the root `Node` of the `Trie`. It's not a copy, it's not safe to mutate (due to performance optimization).
