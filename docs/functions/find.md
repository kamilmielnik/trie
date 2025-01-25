[**@kamilmielnik/trie**](../README.md)

***

[@kamilmielnik/trie](../README.md) / find

# Function: find()

> **find**(`node`, `prefix`): `undefined` \| [`Node`](../interfaces/Node.md)

Defined in: [lib/find.ts:10](https://github.com/kamilmielnik/trie/blob/master/src/lib/find.ts#L10)

Finds [Node](../interfaces/Node.md) representing given prefix in given [Node](../interfaces/Node.md).

## Parameters

### node

[`Node`](../interfaces/Node.md)

[Node](../interfaces/Node.md) to look for prefix in.

### prefix

`string`

Prefix to be found.

## Returns

`undefined` \| [`Node`](../interfaces/Node.md)

[Node](../interfaces/Node.md) representing a given prefix, undefined if there is no such node.
