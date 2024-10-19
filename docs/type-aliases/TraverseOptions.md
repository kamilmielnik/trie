[**@kamilmielnik/trie**](../README.md) • **Docs**

***

[@kamilmielnik/trie](../README.md) / TraverseOptions

# Type Alias: TraverseOptions

> **TraverseOptions**: `object`

## Type declaration

### prefix?

> `optional` **prefix**: `string`

Set the prefix to be applied to all descendants.
It should be the prefix represented by the [Node](../interfaces/Node.md) at which traversing starts.
Defaults to empty string.

### sort?

> `optional` **sort**: `boolean`

Set to true to visit [Nodes](../interfaces/Node.md) in alphabetical order.
Defaults to false.

### wordsOnly?

> `optional` **wordsOnly**: `boolean`

Set to true to only visit [Nodes](../interfaces/Node.md) representing complete words.
Defaults to false.

## Defined in

[types.ts:16](https://github.com/kamilmielnik/trie/blob/master/src/types.ts#L16)
