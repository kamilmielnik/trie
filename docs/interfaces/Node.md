[**@kamilmielnik/trie**](../README.md)

***

[@kamilmielnik/trie](../README.md) / Node

# Interface: Node

Defined in: [types.ts:5](https://github.com/kamilmielnik/trie/blob/master/src/types.ts#L5)

Keys are single characters (strings of length 1) or "wordEnd".
"wordEnd: true" indicates that keys of all parent [Nodes](Node.md) make a valid word when joined together.

## Extends

- `Record`\<`string`, [`Node`](Node.md) \| `true` \| `undefined`\>

## Indexable

\[`key`: `string`\]: `undefined` \| `true` \| [`Node`](Node.md)

## Properties

### wordEnd?

> `optional` **wordEnd**: `true`

Defined in: [types.ts:6](https://github.com/kamilmielnik/trie/blob/master/src/types.ts#L6)
