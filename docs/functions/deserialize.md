[**@kamilmielnik/trie**](../README.md)

***

[@kamilmielnik/trie](../README.md) / deserialize

# Function: deserialize()

> **deserialize**(`serialized`): [`Node`](../interfaces/Node.md)

Defined in: [lib/deserialize.ts:12](https://github.com/kamilmielnik/trie/blob/master/src/lib/deserialize.ts#L12)

Creates a new [Node](../interfaces/Node.md) by deserializing given string.

The inverse of [serialize](serialize.md).

## Parameters

### serialized

`string`

String with value returned by [serialize](serialize.md).

## Returns

[`Node`](../interfaces/Node.md)

Instance of a root [Node](../interfaces/Node.md) of deserialized string.
