# @kamilmielnik/trie

![Version](https://img.shields.io/github/package-json/v/kamilmielnik/trie)
![License](https://img.shields.io/npm/l/@kamilmielnik/trie)
![Node version](https://img.shields.io/node/v/@kamilmielnik/trie)
![Dependencies](https://img.shields.io/librariesio/github/kamilmielnik/trie)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/kamilmielnik/trie)
![Test](https://github.com/kamilmielnik/trie/workflows/Test/badge.svg)
![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)
![Prettier](https://github.com/kamilmielnik/fuck-npm/workflows/Prettier/badge.svg)

[Trie](https://en.wikipedia.org/wiki/Trie) data structure implementation in TypeScript.
Highly performant. No dependencies. Built for a [Scrabble Solver](https://github.com/kamilmielnik/scrabble-solver).

# Table of contents

- [Installation](#installation)
- [API](#api)
  - [Object-oriented API](#object-oriented-api)
  - [Functional API](#functional-api)
- [Examples](#examples)
  - [Load dictionary from file](#load-dictionary-from-file)
  - [Serialize `Node` to a file](#serialize-node-to-a-file)
  - [Load serialized `Node` from a file](#load-serialized-node-from-a-file)
  - [Find all words with given prefix](#find-all-words-with-given-prefix)
- [Serialization and compression](#serialization-and-compression)
- [Performance](#performance)

# Installation

## npm

```Shell
npm install @kamilmielnik/trie --save
```

## yarn

```Shell
yarn add @kamilmielnik/trie
```

# [API](docs/README.md)

See full [API Docs](docs/README.md) - generated by [typedoc](http://typedoc.org/).

Good to know:

- all objects are mutable
- every class, interface, type, constant and function is exported
- all exports are named (there is no default export)

There are 2 ways to use the API.

## [Object-oriented API](docs/README.md#classes)

Create [`Trie`](docs/classes/trie.md) instance and use its' methods.

### Example

```ts
import { Trie } from '@kamilmielnik/trie';

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

## [Functional API](docs/README.md#functions)

Manipulate existing instances of [`Node`](docs/interfaces/node.md) with [functions](docs/README.md#functions).

### Example

The following example works identical to the object-oriented example above.

```ts
import { add, has, hasPrefix, Node, remove, serialize } from '@kamilmielnik/trie';

const root: Node = {};

add(root, 'master');
add(root, 'mask');
console.log(hasPrefix(root, 'man')); // false
console.log(hasPrefix(root, 'mas')); // true
console.log(has(root, 'mas')); // false
console.log(remove(root, 'mas')); // false
console.log(has(root, 'master')); // true
console.log(serialize(root)); // "(m(a(s(t(e(r))k))))"
console.log(remove(root, 'master')); // true
console.log(serialize(root)); // "(m(a(s(k))))"
```

# Examples

- [Load dictionary from file](#load-dictionary-from-file)
- [Serialize `Node` to a file](#serialize-node-to-a-file)
- [Load serialized `Node` from a file](#load-serialized-node-from-a-file)
- [Find all words with given prefix](#find-all-words-with-given-prefix)

## Load dictionary from file

```ts
import { fromArray, Node } from '@kamilmielnik/trie';
import fs from 'fs';

const fromFile = (filepath: string): Node => {
  const file = fs.readFileSync(filepath, 'utf-8');
  // Assuming file contains 1 word per line
  const words = file.split('\n').filter(Boolean);
  const node = fromArray(words);
  return node;
};
```

## Serialize [`Node`](docs/interfaces/node.md) to a file

```ts
import { Trie } from '@kamilmielnik/trie';
import fs from 'fs';

const toFile = (trie: Trie): void => {
  const serialized = trie.serialize();
  fs.writeFileSync(filepath, serialized);
};
```

## Load serialized [`Node`](docs/interfaces/node.md) from a file

```ts
import { deserialize, Node } from '@kamilmielnik/trie';
import fs from 'fs';

const fromFile = (filepath: string): Node => {
  const serialized = fs.readFileSync(filepath, 'utf-8');
  const node = deserialize(serialized);
  return node;
};
```

## Find all words with given prefix

```ts
import { find, Node, toArray } from '@kamilmielnik/trie';

const findWordsWithPrefix = (node: Node, prefix: string): string[] => {
  const prefixNode = find(node, prefix) || {};
  const descendants = toArray(prefixNode, { prefix, sort: true, wordsOnly: true });
  const words = descendants.map(({ prefix: word }) => word);
  return words;
};
```

# Serialization and compression

This package can be used to efficiently [serialize](docs/README.md#serialize) and compress dictionaries.
It reaches 1.01864 compression ratio (98.17%) for Polish dictionary when combined with [7-Zip](https://en.wikipedia.org/wiki/7z) at ultra compression level.

| Language                                                            | 🇺🇸 en-US                                                                | 🇬🇧 en-GB                                                                    | 🇵🇱 pl-PL                                  |
| ------------------------------------------------------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------- |
| Name                                                                | [TWL06](https://en.wikipedia.org/wiki/NASPA_Word_List)                  | [SOWPODS](https://en.wikipedia.org/wiki/Collins_Scrabble_Words)             | [SJP.PL](https://sjp.pl/slownik/dp.phtml) |
| Source                                                              | [Download](https://www.wordgamedictionary.com/twl06/download/twl06.txt) | [Download](https://www.wordgamedictionary.com/sowpods/download/sowpods.txt) | [Download](https://sjp.pl/slownik/growy/) |
| Words count                                                         | 178,691                                                                 | 267,753                                                                     | 3,045,878                                 |
| File size [B]                                                       | 1,941,856                                                               | 2,974,773                                                                   | 42,838,508                                |
| File size (serialized) [B]                                          | (-29.75%) 1,364,242                                                     | (-31.57%) 2,035,697                                                         | (-56.33%) 18,705,990                      |
| File size ([7z](https://en.wikipedia.org/wiki/7z)) [B]              | (-80.46%) 379,483                                                       | (-81.04%) 563,913                                                           | (-87.58%) 5,320,397                       |
| File size (serialized + [7z](https://en.wikipedia.org/wiki/7z)) [B] | (-89.94%) 195,299                                                       | (-90.40%) 285,430                                                           | (-98.17%) 781,875                         |

# Performance

[`add`](docs/README.md#add), [`find`](docs/README.md#find), [`has`](docs/README.md#has), [`hasPrefix`](docs/README.md#hasPrefix), [`remove`](docs/README.md#remove) are very fast - logarithmic complexity (millions of operations per second).

![image](https://user-images.githubusercontent.com/6830683/100113381-d5b63580-2ea2-11eb-8ed6-0e03515b5d9a.png)

----

[`deserialize`](docs/README.md#deserialize), [`fromArray`](docs/README.md#fromArray), [`serialize`](docs/README.md#serialize), [`toArray`](docs/README.md#toArray) are slow - linear complexity (few operations per second).

![image](https://user-images.githubusercontent.com/6830683/100113526-fe3e2f80-2ea2-11eb-9b1e-22ae954e297a.png)
