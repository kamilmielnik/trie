[**@kamilmielnik/trie**](../README.md)

***

[@kamilmielnik/trie](../README.md) / serialize

# Function: serialize()

> **serialize**(`node`): `string`

Defined in: [lib/serialize.ts:37](https://github.com/kamilmielnik/trie/blob/master/src/lib/serialize.ts#L37)

Converts given [Node](../interfaces/Node.md) into a string.

The inverse of [deserialize](deserialize.md).

It serializes [42.8 MB Polish dictionary](https://sjp.pl/slownik/growy/) down to 18.7 MB (-56%).

It serializes [1.9 MB English (US) dictionary](https://www.wordgamedictionary.com/twl06/download/twl06.txt) down to 1.4 MB (-30%).

It serializes [3 MB English (GB) dictionary](https://www.wordgamedictionary.com/sowpods/download/sowpods.txt) down to 2 MB (-32%).

## Parameters

### node

[`Node`](../interfaces/Node.md)

[Node](../interfaces/Node.md) to serialize.

## Returns

`string`

String with serialized data.
