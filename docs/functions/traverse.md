[**@kamilmielnik/trie**](../README.md)

***

[@kamilmielnik/trie](../README.md) / traverse

# Function: traverse()

> **traverse**(`node`, `callback`, `options`): `void`

Defined in: [lib/traverse.ts:17](https://github.com/kamilmielnik/trie/blob/master/src/lib/traverse.ts#L17)

Visits every descendant [Node](../interfaces/Node.md) of given [Node](../interfaces/Node.md) and calls a callback.

## Parameters

### node

[`Node`](../interfaces/Node.md)

[Node](../interfaces/Node.md) to look for descendant [Nodes](../interfaces/Node.md) in.

### callback

[`TraverseCallback`](../type-aliases/TraverseCallback.md)

Callback that will be called for each visited [Node](../interfaces/Node.md). Return true from callback to stop traversing.

### options

[`TraverseOptions`](../type-aliases/TraverseOptions.md) = `{}`

See [TraverseOptions](../type-aliases/TraverseOptions.md).

## Returns

`void`
