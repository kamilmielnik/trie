[@kamilmielnik/trie](../README.md) / Trie

# Class: Trie

A class representing the [Trie data structure](https://en.wikipedia.org/wiki/Trie).

## Table of contents

### Constructors

- [constructor](Trie.md#constructor)

### Properties

- [root](Trie.md#root)

### Methods

- [add](Trie.md#add)
- [find](Trie.md#find)
- [has](Trie.md#has)
- [hasPrefix](Trie.md#hasprefix)
- [remove](Trie.md#remove)
- [serialize](Trie.md#serialize)
- [toArray](Trie.md#toarray)
- [traverse](Trie.md#traverse)
- [deserialize](Trie.md#deserialize)
- [fromArray](Trie.md#fromarray)

## Constructors

### constructor

• **new Trie**(`root?`)

Creates a new [Trie](Trie.md) with optionally given root [Node](../interfaces/Node.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `root` | [`Node`](../interfaces/Node.md) | Root [Node](../interfaces/Node.md) of the [Trie](Trie.md) to be created. |

#### Defined in

[Trie.ts:52](https://github.com/kamilmielnik/trie/blob/master/src/Trie.ts#L52)

## Properties

### root

• `Readonly` **root**: [`Node`](../interfaces/Node.md)

Represents the root [Node](../interfaces/Node.md) of the [Trie](Trie.md).
It's not a copy. Mutate at your own risk.

#### Defined in

[Trie.ts:45](https://github.com/kamilmielnik/trie/blob/master/src/Trie.ts#L45)

## Methods

### add

▸ **add**(`word`): [`Node`](../interfaces/Node.md)

Inserts given word into the [Trie](Trie.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `word` | `string` | Word to be inserted into the [Trie](Trie.md). |

#### Returns

[`Node`](../interfaces/Node.md)

[Node](../interfaces/Node.md) representing the end of the added word.

#### Defined in

[Trie.ts:62](https://github.com/kamilmielnik/trie/blob/master/src/Trie.ts#L62)

___

### find

▸ **find**(`prefix`): `undefined` \| [`Node`](../interfaces/Node.md)

Finds [Node](../interfaces/Node.md) representing given prefix in the [Trie](Trie.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | Prefix to be found. |

#### Returns

`undefined` \| [`Node`](../interfaces/Node.md)

[Node](../interfaces/Node.md) representing a given prefix, undefined if there is no such node.

#### Defined in

[Trie.ts:72](https://github.com/kamilmielnik/trie/blob/master/src/Trie.ts#L72)

___

### has

▸ **has**(`word`): `boolean`

Tells you whether given word is in the [Trie](Trie.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `word` | `string` | Word to be found. |

#### Returns

`boolean`

true if given word is in the [Trie](Trie.md), false otherwise.

#### Defined in

[Trie.ts:82](https://github.com/kamilmielnik/trie/blob/master/src/Trie.ts#L82)

___

### hasPrefix

▸ **hasPrefix**(`prefix`): `boolean`

Tells you whether there are any words with given prefix in the [Trie](Trie.md).

See: https://en.wikipedia.org/wiki/String_operations#Prefixes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | Prefix to be found. |

#### Returns

`boolean`

true if there are any words with given prefix in the [Trie](Trie.md), false otherwise.

#### Defined in

[Trie.ts:94](https://github.com/kamilmielnik/trie/blob/master/src/Trie.ts#L94)

___

### remove

▸ **remove**(`word`): `boolean`

Removes given word from the [Trie](Trie.md) if it exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `word` | `string` | Word to be removed. |

#### Returns

`boolean`

true if the word was removed, false otherwise.

#### Defined in

[Trie.ts:104](https://github.com/kamilmielnik/trie/blob/master/src/Trie.ts#L104)

___

### serialize

▸ **serialize**(): `string`

Converts the [Trie](Trie.md) into a string.

The inverse of [asd](Trie.md#deserialize).

It serializes [42.8 MB Polish dictionary](https://sjp.pl/slownik/growy/) down to 18.7 MB (-56%).

It serializes [1.9 MB English (US) dictionary](https://www.wordgamedictionary.com/twl06/download/twl06.txt) down to 1.4 MB (-30%).

It serializes [3 MB English (GB) dictionary](https://www.wordgamedictionary.com/sowpods/download/sowpods.txt) down to 2 MB (-32%).

#### Returns

`string`

String with serialized data.

#### Defined in

[Trie.ts:121](https://github.com/kamilmielnik/trie/blob/master/src/Trie.ts#L121)

___

### toArray

▸ **toArray**(`options?`): [`Descendant`](../README.md#descendant)[]

Finds all [descendants](../README.md#descendant) of the [Trie's](Trie.md) root and returns them as an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | [`TraverseOptions`](../README.md#traverseoptions) | See [TraverseOptions](../README.md#traverseoptions). |

#### Returns

[`Descendant`](../README.md#descendant)[]

An array of [descendants](../README.md#descendant).

#### Defined in

[Trie.ts:131](https://github.com/kamilmielnik/trie/blob/master/src/Trie.ts#L131)

___

### traverse

▸ **traverse**(`callback`, `options?`): `void`

Visits every descendant [Node](../interfaces/Node.md) of the [Trie](Trie.md) and calls a callback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`TraverseCallback`](../README.md#traversecallback) | Callback that will be called for each visited [Node](../interfaces/Node.md). Return true from callback to stop traversing. |
| `options?` | [`TraverseOptions`](../README.md#traverseoptions) | See [TraverseOptions](../README.md#traverseoptions). |

#### Returns

`void`

#### Defined in

[Trie.ts:141](https://github.com/kamilmielnik/trie/blob/master/src/Trie.ts#L141)

___

### deserialize

▸ `Static` **deserialize**(`serialized`): [`Trie`](Trie.md)

Creates a new [Trie](Trie.md) by deserializing given string.

The inverse of [asd](Trie.md#serialize).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serialized` | `string` | String with serialized data. |

#### Returns

[`Trie`](Trie.md)

[Trie](Trie.md) representing deserialized data.

#### Defined in

[Trie.ts:27](https://github.com/kamilmielnik/trie/blob/master/src/Trie.ts#L27)

___

### fromArray

▸ `Static` **fromArray**(`words`): [`Trie`](Trie.md)

Creates a new [Trie](Trie.md) based on array of words.

**`Params`**

words - array of words to put in the [Trie](Trie.md).

#### Parameters

| Name | Type |
| :------ | :------ |
| `words` | `string`[] |

#### Returns

[`Trie`](Trie.md)

New [Trie](Trie.md) containing all given words.

#### Defined in

[Trie.ts:37](https://github.com/kamilmielnik/trie/blob/master/src/Trie.ts#L37)
