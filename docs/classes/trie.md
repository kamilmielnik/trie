**[@kamilmielnik/trie](../README.md)**

> [Globals](../README.md) / Trie

# Class: Trie

A class representing the [Trie data structure](https://en.wikipedia.org/wiki/Trie).

## Hierarchy

* **Trie**

## Index

### Constructors

* [constructor](trie.md#constructor)

### Properties

* [root](trie.md#root)

### Methods

* [add](trie.md#add)
* [find](trie.md#find)
* [has](trie.md#has)
* [hasPrefix](trie.md#hasprefix)
* [remove](trie.md#remove)
* [serialize](trie.md#serialize)
* [toArray](trie.md#toarray)
* [traverse](trie.md#traverse)
* [deserialize](trie.md#deserialize)
* [fromArray](trie.md#fromarray)

## Constructors

### constructor

\+ **new Trie**(`root?`: [Node](../interfaces/node.md)): [Trie](trie.md)

*Defined in [Trie.ts:45](https://github.com/kamilmielnik/trie/blob/95e999d/src/Trie.ts#L45)*

Creates a new [Trie](trie.md) with optionally given root [Node](../interfaces/node.md).

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`root` | [Node](../interfaces/node.md) | {} | Root [Node](../interfaces/node.md) of the [Trie](trie.md) to be created.  |

**Returns:** [Trie](trie.md)

## Properties

### root

• `Readonly` **root**: [Node](../interfaces/node.md)

*Defined in [Trie.ts:45](https://github.com/kamilmielnik/trie/blob/95e999d/src/Trie.ts#L45)*

Represents the root [Node](../interfaces/node.md) of the [Trie](trie.md).
It's not a copy. Mutate at your own risk.

## Methods

### add

▸ **add**(`word`: string): [Node](../interfaces/node.md)

*Defined in [Trie.ts:62](https://github.com/kamilmielnik/trie/blob/95e999d/src/Trie.ts#L62)*

Inserts given word into the [Trie](trie.md).

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`word` | string | Word to be inserted into the [Trie](trie.md). |

**Returns:** [Node](../interfaces/node.md)

[Node](../interfaces/node.md) representing the end of the added word.

___

### find

▸ **find**(`prefix`: string): [Node](../interfaces/node.md) \| undefined

*Defined in [Trie.ts:72](https://github.com/kamilmielnik/trie/blob/95e999d/src/Trie.ts#L72)*

Finds [Node](../interfaces/node.md) representing given prefix in the [Trie](trie.md).

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`prefix` | string | Prefix to be found. |

**Returns:** [Node](../interfaces/node.md) \| undefined

[Node](../interfaces/node.md) representing a given prefix, undefined if there is no such node.

___

### has

▸ **has**(`word`: string): boolean

*Defined in [Trie.ts:82](https://github.com/kamilmielnik/trie/blob/95e999d/src/Trie.ts#L82)*

Tells you whether given word is in the [Trie](trie.md).

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`word` | string | Word to be found. |

**Returns:** boolean

true if given word is in the [Trie](trie.md), false otherwise.

___

### hasPrefix

▸ **hasPrefix**(`prefix`: string): boolean

*Defined in [Trie.ts:94](https://github.com/kamilmielnik/trie/blob/95e999d/src/Trie.ts#L94)*

Tells you whether there are any words with given prefix in the [Trie](trie.md).

See: https://en.wikipedia.org/wiki/String_operations#Prefixes

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`prefix` | string | Prefix to be found. |

**Returns:** boolean

true if there are any words with given prefix in the [Trie](trie.md), false otherwise.

___

### remove

▸ **remove**(`word`: string): boolean

*Defined in [Trie.ts:104](https://github.com/kamilmielnik/trie/blob/95e999d/src/Trie.ts#L104)*

Removes given word from the [Trie](trie.md) if it exists.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`word` | string | Word to be removed. |

**Returns:** boolean

true if the word was removed, false otherwise.

___

### serialize

▸ **serialize**(): string

*Defined in [Trie.ts:121](https://github.com/kamilmielnik/trie/blob/95e999d/src/Trie.ts#L121)*

Converts the [Trie](trie.md) into a string.

The inverse of [asd](trie.md#deserialize).

It serializes [41 MB Polish dictionary](https://sjp.pl/slownik/growy/) down to 12 MB (-71%).

It serializes [1.9 MB English (US) dictionary](https://www.wordgamedictionary.com/twl06/download/twl06.txt) down to 993 KB (-48%).

It serializes [2.9 MB English (GB) dictionary](https://www.wordgamedictionary.com/sowpods/download/sowpods.txt) down to 1.5 MB (-49%).

**Returns:** string

String with serialized data.

___

### toArray

▸ **toArray**(`options?`: [TraverseOptions](../README.md#traverseoptions)): [Descendant](../README.md#descendant)[]

*Defined in [Trie.ts:131](https://github.com/kamilmielnik/trie/blob/95e999d/src/Trie.ts#L131)*

Finds all [descendants](../README.md#descendant) of the [Trie's](trie.md) root and returns them as an array.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`options?` | [TraverseOptions](../README.md#traverseoptions) | See [TraverseOptions](../README.md#traverseoptions). |

**Returns:** [Descendant](../README.md#descendant)[]

An array of [descendants](../README.md#descendant).

___

### traverse

▸ **traverse**(`callback`: [TraverseCallback](../README.md#traversecallback), `options?`: [TraverseOptions](../README.md#traverseoptions)): void

*Defined in [Trie.ts:141](https://github.com/kamilmielnik/trie/blob/95e999d/src/Trie.ts#L141)*

Visits every descendant [Node](../interfaces/node.md) of the [Trie](trie.md) and calls a callback.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`callback` | [TraverseCallback](../README.md#traversecallback) | Callback that will be called for each visited [Node](../interfaces/node.md). Return true from callback to stop traversing. |
`options?` | [TraverseOptions](../README.md#traverseoptions) | See [TraverseOptions](../README.md#traverseoptions).  |

**Returns:** void

___

### deserialize

▸ `Static`**deserialize**(`serialized`: string): [Trie](trie.md)

*Defined in [Trie.ts:27](https://github.com/kamilmielnik/trie/blob/95e999d/src/Trie.ts#L27)*

Creates a new [Trie](trie.md) by deserializing given string.

The inverse of [asd](trie.md#serialize).

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | String with serialized data. |

**Returns:** [Trie](trie.md)

[Trie](trie.md) representing deserialized data.

___

### fromArray

▸ `Static`**fromArray**(`words`: string[]): [Trie](trie.md)

*Defined in [Trie.ts:37](https://github.com/kamilmielnik/trie/blob/95e999d/src/Trie.ts#L37)*

Creates a new [Trie](trie.md) based on array of words.

**`params`** words - array of words to put in the [Trie](trie.md).

#### Parameters:

Name | Type |
------ | ------ |
`words` | string[] |

**Returns:** [Trie](trie.md)

New [Trie](trie.md) containing all given words.
