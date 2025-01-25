[**@kamilmielnik/trie**](../README.md)

***

[@kamilmielnik/trie](../README.md) / Trie

# Class: Trie

Defined in: [Trie.ts:18](https://github.com/kamilmielnik/trie/blob/master/src/Trie.ts#L18)

A class representing the [Trie data structure](https://en.wikipedia.org/wiki/Trie).

## Constructors

### new Trie()

> **new Trie**(`root`): [`Trie`](Trie.md)

Defined in: [Trie.ts:52](https://github.com/kamilmielnik/trie/blob/master/src/Trie.ts#L52)

Creates a new [Trie](Trie.md) with optionally given root [Node](../interfaces/Node.md).

#### Parameters

##### root

[`Node`](../interfaces/Node.md) = `{}`

Root [Node](../interfaces/Node.md) of the [Trie](Trie.md) to be created.

#### Returns

[`Trie`](Trie.md)

## Properties

### root

> `readonly` **root**: [`Node`](../interfaces/Node.md)

Defined in: [Trie.ts:45](https://github.com/kamilmielnik/trie/blob/master/src/Trie.ts#L45)

Represents the root [Node](../interfaces/Node.md) of the [Trie](Trie.md).
It's not a copy. Mutate at your own risk.

## Methods

### add()

> **add**(`word`): [`Node`](../interfaces/Node.md)

Defined in: [Trie.ts:62](https://github.com/kamilmielnik/trie/blob/master/src/Trie.ts#L62)

Inserts given word into the [Trie](Trie.md).

#### Parameters

##### word

`string`

Word to be inserted into the [Trie](Trie.md).

#### Returns

[`Node`](../interfaces/Node.md)

[Node](../interfaces/Node.md) representing the end of the added word.

***

### find()

> **find**(`prefix`): `undefined` \| [`Node`](../interfaces/Node.md)

Defined in: [Trie.ts:72](https://github.com/kamilmielnik/trie/blob/master/src/Trie.ts#L72)

Finds [Node](../interfaces/Node.md) representing given prefix in the [Trie](Trie.md).

#### Parameters

##### prefix

`string`

Prefix to be found.

#### Returns

`undefined` \| [`Node`](../interfaces/Node.md)

[Node](../interfaces/Node.md) representing a given prefix, undefined if there is no such node.

***

### has()

> **has**(`word`): `boolean`

Defined in: [Trie.ts:82](https://github.com/kamilmielnik/trie/blob/master/src/Trie.ts#L82)

Tells you whether given word is in the [Trie](Trie.md).

#### Parameters

##### word

`string`

Word to be found.

#### Returns

`boolean`

true if given word is in the [Trie](Trie.md), false otherwise.

***

### hasPrefix()

> **hasPrefix**(`prefix`): `boolean`

Defined in: [Trie.ts:94](https://github.com/kamilmielnik/trie/blob/master/src/Trie.ts#L94)

Tells you whether there are any words with given prefix in the [Trie](Trie.md).

See: https://en.wikipedia.org/wiki/String_operations#Prefixes

#### Parameters

##### prefix

`string`

Prefix to be found.

#### Returns

`boolean`

true if there are any words with given prefix in the [Trie](Trie.md), false otherwise.

***

### remove()

> **remove**(`word`): `boolean`

Defined in: [Trie.ts:104](https://github.com/kamilmielnik/trie/blob/master/src/Trie.ts#L104)

Removes given word from the [Trie](Trie.md) if it exists.

#### Parameters

##### word

`string`

Word to be removed.

#### Returns

`boolean`

true if the word was removed, false otherwise.

***

### serialize()

> **serialize**(): `string`

Defined in: [Trie.ts:121](https://github.com/kamilmielnik/trie/blob/master/src/Trie.ts#L121)

Converts the [Trie](Trie.md) into a string.

The inverse of [deserialize](Trie.md#deserialize).

It serializes [42.8 MB Polish dictionary](https://sjp.pl/slownik/growy/) down to 18.7 MB (-56%).

It serializes [1.9 MB English (US) dictionary](https://www.wordgamedictionary.com/twl06/download/twl06.txt) down to 1.4 MB (-30%).

It serializes [3 MB English (GB) dictionary](https://www.wordgamedictionary.com/sowpods/download/sowpods.txt) down to 2 MB (-32%).

#### Returns

`string`

String with serialized data.

***

### toArray()

> **toArray**(`options`?): [`Descendant`](../type-aliases/Descendant.md)[]

Defined in: [Trie.ts:131](https://github.com/kamilmielnik/trie/blob/master/src/Trie.ts#L131)

Finds all [descendants](../type-aliases/Descendant.md) of the [Trie's](Trie.md) root and returns them as an array.

#### Parameters

##### options?

[`TraverseOptions`](../type-aliases/TraverseOptions.md)

See [TraverseOptions](../type-aliases/TraverseOptions.md).

#### Returns

[`Descendant`](../type-aliases/Descendant.md)[]

An array of [descendants](../type-aliases/Descendant.md).

***

### traverse()

> **traverse**(`callback`, `options`?): `void`

Defined in: [Trie.ts:141](https://github.com/kamilmielnik/trie/blob/master/src/Trie.ts#L141)

Visits every descendant [Node](../interfaces/Node.md) of the [Trie](Trie.md) and calls a callback.

#### Parameters

##### callback

[`TraverseCallback`](../type-aliases/TraverseCallback.md)

Callback that will be called for each visited [Node](../interfaces/Node.md). Return true from callback to stop traversing.

##### options?

[`TraverseOptions`](../type-aliases/TraverseOptions.md)

See [TraverseOptions](../type-aliases/TraverseOptions.md).

#### Returns

`void`

***

### deserialize()

> `static` **deserialize**(`serialized`): [`Trie`](Trie.md)

Defined in: [Trie.ts:27](https://github.com/kamilmielnik/trie/blob/master/src/Trie.ts#L27)

Creates a new [Trie](Trie.md) by deserializing given string.

The inverse of [serialize](Trie.md#serialize).

#### Parameters

##### serialized

`string`

String with serialized data.

#### Returns

[`Trie`](Trie.md)

[Trie](Trie.md) representing deserialized data.

***

### fromArray()

> `static` **fromArray**(`words`): [`Trie`](Trie.md)

Defined in: [Trie.ts:37](https://github.com/kamilmielnik/trie/blob/master/src/Trie.ts#L37)

Creates a new [Trie](Trie.md) based on array of words.

#### Parameters

##### words

`string`[]

array of words to put in the [Trie](Trie.md).

#### Returns

[`Trie`](Trie.md)

New [Trie](Trie.md) containing all given words.
