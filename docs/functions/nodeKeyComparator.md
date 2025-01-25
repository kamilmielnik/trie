[**@kamilmielnik/trie**](../README.md)

***

[@kamilmielnik/trie](../README.md) / nodeKeyComparator

# Function: nodeKeyComparator()

> **nodeKeyComparator**(`key1`, `key2`): `number`

Defined in: [lib/nodeKeyComparator.ts:9](https://github.com/kamilmielnik/trie/blob/master/src/lib/nodeKeyComparator.ts#L9)

Comparator that allows sorting [Node](../interfaces/Node.md) keys alphabetically
with the exception of "wordEnd" which should always come first.

## Parameters

### key1

`string`

First key to compare.

### key2

`string`

Second key to compare.

## Returns

`number`

-1 if key1 should precede key2, 0 if they're the same, 1 if key2 should precede key1.
