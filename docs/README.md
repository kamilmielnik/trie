@kamilmielnik/trie

# @kamilmielnik/trie

## Table of contents

### Classes

- [Trie](classes/Trie.md)

### Interfaces

- [Node](interfaces/Node.md)

### Type Aliases

- [Descendant](README.md#descendant)
- [TraverseCallback](README.md#traversecallback)
- [TraverseOptions](README.md#traverseoptions)

### Variables

- [CLOSE\_PARENS](README.md#close_parens)
- [OPEN\_PARENS](README.md#open_parens)

### Functions

- [add](README.md#add)
- [deserialize](README.md#deserialize)
- [find](README.md#find)
- [fromArray](README.md#fromarray)
- [has](README.md#has)
- [hasPrefix](README.md#hasprefix)
- [nodeKeyComparator](README.md#nodekeycomparator)
- [remove](README.md#remove)
- [serialize](README.md#serialize)
- [toArray](README.md#toarray)
- [traverse](README.md#traverse)

## Type Aliases

### Descendant

Ƭ **Descendant**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](interfaces/Node.md) |
| `prefix` | `string` |

#### Defined in

[types.ts:11](https://github.com/kamilmielnik/trie/blob/master/src/types.ts#L11)

___

### TraverseCallback

Ƭ **TraverseCallback**: (`descendant`: [`Descendant`](README.md#descendant)) => `boolean` \| `void`

#### Type declaration

▸ (`descendant`): `boolean` \| `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `descendant` | [`Descendant`](README.md#descendant) |

##### Returns

`boolean` \| `void`

#### Defined in

[types.ts:9](https://github.com/kamilmielnik/trie/blob/master/src/types.ts#L9)

___

### TraverseOptions

Ƭ **TraverseOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix?` | `string` | Set the prefix to be applied to all descendants. It should be the prefix represented by the [Node](interfaces/Node.md) at which traversing starts. Defaults to empty string. |
| `sort?` | `boolean` | Set to true to visit [Nodes](interfaces/Node.md) in alphabetical order. Defaults to false. |
| `wordsOnly?` | `boolean` | Set to true to only visit [Nodes](interfaces/Node.md) representing complete words. Defaults to false. |

#### Defined in

[types.ts:16](https://github.com/kamilmielnik/trie/blob/master/src/types.ts#L16)

## Variables

### CLOSE\_PARENS

• `Const` **CLOSE\_PARENS**: ``")"``

Represents end of a node in serialized format.

#### Defined in

[constants.ts:4](https://github.com/kamilmielnik/trie/blob/master/src/constants.ts#L4)

___

### OPEN\_PARENS

• `Const` **OPEN\_PARENS**: ``"("``

Represents start of a node in serialized format.

#### Defined in

[constants.ts:9](https://github.com/kamilmielnik/trie/blob/master/src/constants.ts#L9)

## Functions

### add

▸ **add**(`node`, `word`): [`Node`](interfaces/Node.md)

Inserts given `word` into given `node`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`Node`](interfaces/Node.md) | [Node](interfaces/Node.md) to insert the `word` to. |
| `word` | `string` | Word to be inserted into `node`. |

#### Returns

[`Node`](interfaces/Node.md)

[Node](interfaces/Node.md) representing the end of the added word.

#### Defined in

[lib/add.ts:10](https://github.com/kamilmielnik/trie/blob/master/src/lib/add.ts#L10)

___

### deserialize

▸ **deserialize**(`serialized`): [`Node`](interfaces/Node.md)

Creates a new [Node](interfaces/Node.md) by deserializing given string.

The inverse of [serialize](README.md#serialize).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serialized` | `string` | String with value returned by [serialize](README.md#serialize). |

#### Returns

[`Node`](interfaces/Node.md)

Instance of a root [Node](interfaces/Node.md) of deserialized string.

#### Defined in

[lib/deserialize.ts:12](https://github.com/kamilmielnik/trie/blob/master/src/lib/deserialize.ts#L12)

___

### find

▸ **find**(`node`, `prefix`): `undefined` \| [`Node`](interfaces/Node.md)

Finds [Node](interfaces/Node.md) representing given prefix in given [Node](interfaces/Node.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`Node`](interfaces/Node.md) | [Node](interfaces/Node.md) to look for prefix in. |
| `prefix` | `string` | Prefix to be found. |

#### Returns

`undefined` \| [`Node`](interfaces/Node.md)

[Node](interfaces/Node.md) representing a given prefix, undefined if there is no such node.

#### Defined in

[lib/find.ts:10](https://github.com/kamilmielnik/trie/blob/master/src/lib/find.ts#L10)

___

### fromArray

▸ **fromArray**(`words`): [`Node`](interfaces/Node.md)

Creates a new [Node](interfaces/Node.md) based on array of words.

#### Parameters

| Name | Type |
| :------ | :------ |
| `words` | `string`[] |

#### Returns

[`Node`](interfaces/Node.md)

New [Node](interfaces/Node.md) containing all given words.

**`Params`**

words - array of words to put in the [Node](interfaces/Node.md).

#### Defined in

[lib/fromArray.ts:11](https://github.com/kamilmielnik/trie/blob/master/src/lib/fromArray.ts#L11)

___

### has

▸ **has**(`node`, `word`): `boolean`

Tells you whether given word is in the [Node](interfaces/Node.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`Node`](interfaces/Node.md) | [Node](interfaces/Node.md) to look for word in. |
| `word` | `string` | Word to be found. |

#### Returns

`boolean`

true if given word is in the [Node](interfaces/Node.md), false otherwise.

#### Defined in

[lib/has.ts:12](https://github.com/kamilmielnik/trie/blob/master/src/lib/has.ts#L12)

___

### hasPrefix

▸ **hasPrefix**(`node`, `prefix`): `boolean`

Tells you whether there are any words with given prefix in the [Node](interfaces/Node.md).

See: https://en.wikipedia.org/wiki/String_operations#Prefixes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`Node`](interfaces/Node.md) | [Node](interfaces/Node.md) to look for prefix in. |
| `prefix` | `string` | Prefix to be found. |

#### Returns

`boolean`

true if there are any words with given prefix in the [Node](interfaces/Node.md), false otherwise.

#### Defined in

[lib/hasPrefix.ts:14](https://github.com/kamilmielnik/trie/blob/master/src/lib/hasPrefix.ts#L14)

___

### nodeKeyComparator

▸ **nodeKeyComparator**(`key1`, `key2`): `number`

Comparator that allows sorting [Node](interfaces/Node.md) keys alphabetically
with the exception of "wordEnd" which should always come first.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key1` | `string` | First key to compare. |
| `key2` | `string` | Second key to compare. |

#### Returns

`number`

-1 if key1 should precede key2, 0 if they're the same, 1 if key2 should precede key1.

#### Defined in

[lib/nodeKeyComparator.ts:9](https://github.com/kamilmielnik/trie/blob/master/src/lib/nodeKeyComparator.ts#L9)

___

### remove

▸ **remove**(`node`, `word`): `boolean`

Removes given word from given [Node](interfaces/Node.md) if it exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`Node`](interfaces/Node.md) | [Node](interfaces/Node.md) to remove word from. |
| `word` | `string` | Word to be removed. |

#### Returns

`boolean`

true if the word was removed, false otherwise.

#### Defined in

[lib/remove.ts:10](https://github.com/kamilmielnik/trie/blob/master/src/lib/remove.ts#L10)

___

### serialize

▸ **serialize**(`node`): `string`

Converts given [Node](interfaces/Node.md) into a string.

The inverse of [deserialize](README.md#deserialize).

It serializes [42.8 MB Polish dictionary](https://sjp.pl/slownik/growy/) down to 18.7 MB (-56%).

It serializes [1.9 MB English (US) dictionary](https://www.wordgamedictionary.com/twl06/download/twl06.txt) down to 1.4 MB (-30%).

It serializes [3 MB English (GB) dictionary](https://www.wordgamedictionary.com/sowpods/download/sowpods.txt) down to 2 MB (-32%).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`Node`](interfaces/Node.md) | [Node](interfaces/Node.md) to serialize. |

#### Returns

`string`

String with serialized data.

#### Defined in

[lib/serialize.ts:37](https://github.com/kamilmielnik/trie/blob/master/src/lib/serialize.ts#L37)

___

### toArray

▸ **toArray**(`node`, `options?`): [`Descendant`](README.md#descendant)[]

Finds all [descendants](README.md#descendant) of given [Node](interfaces/Node.md) and returns them as an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`Node`](interfaces/Node.md) | [Node](interfaces/Node.md) to look for [descendants](README.md#descendant) in. |
| `options?` | [`TraverseOptions`](README.md#traverseoptions) | See [TraverseOptions](README.md#traverseoptions). |

#### Returns

[`Descendant`](README.md#descendant)[]

An array of [descendants](README.md#descendant).

#### Defined in

[lib/toArray.ts:12](https://github.com/kamilmielnik/trie/blob/master/src/lib/toArray.ts#L12)

___

### traverse

▸ **traverse**(`node`, `callback`, `options?`): `void`

Visits every descendant [Node](interfaces/Node.md) of given [Node](interfaces/Node.md) and calls a callback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`Node`](interfaces/Node.md) | [Node](interfaces/Node.md) to look for descendant [Nodes](interfaces/Node.md) in. |
| `callback` | [`TraverseCallback`](README.md#traversecallback) | Callback that will be called for each visited [Node](interfaces/Node.md). Return true from callback to stop traversing. |
| `options` | [`TraverseOptions`](README.md#traverseoptions) | See [TraverseOptions](README.md#traverseoptions). |

#### Returns

`void`

#### Defined in

[lib/traverse.ts:17](https://github.com/kamilmielnik/trie/blob/master/src/lib/traverse.ts#L17)
