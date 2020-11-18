**[@kamilmielnik/trie](../README.md)**

> [Globals](../README.md) / Trie

# Class: Trie

A class representing the [Trie](trie.md) data structure (https://en.wikipedia.org/wiki/Trie).

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

*Defined in [Trie.ts:44](https://github.com/kamilmielnik/trie/blob/4acbb7b/src/Trie.ts#L44)*

Creates a new [Trie](trie.md) with optionally given root [Node](../interfaces/node.md).

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`root` | [Node](../interfaces/node.md) | {} | Root [Node](../interfaces/node.md) of the [Trie](trie.md) to be created.  |

**Returns:** [Trie](trie.md)

## Properties

### root

• `Readonly` **root**: [Node](../interfaces/node.md)

*Defined in [Trie.ts:44](https://github.com/kamilmielnik/trie/blob/4acbb7b/src/Trie.ts#L44)*

Represents the root [Node](../interfaces/node.md) of the [Trie](trie.md).
It's not a copy. Mutate at your own risk.

## Methods

### add

▸ **add**(`word`: string): [Node](../interfaces/node.md)

*Defined in [Trie.ts:61](https://github.com/kamilmielnik/trie/blob/4acbb7b/src/Trie.ts#L61)*

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

*Defined in [Trie.ts:71](https://github.com/kamilmielnik/trie/blob/4acbb7b/src/Trie.ts#L71)*

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

*Defined in [Trie.ts:78](https://github.com/kamilmielnik/trie/blob/4acbb7b/src/Trie.ts#L78)*

Returns true if given word is in the [Trie](trie.md).

#### Parameters:

Name | Type |
------ | ------ |
`word` | string |

**Returns:** boolean

___

### hasPrefix

▸ **hasPrefix**(`prefix`: string): boolean

*Defined in [Trie.ts:86](https://github.com/kamilmielnik/trie/blob/4acbb7b/src/Trie.ts#L86)*

Returns true if there are any words with given prefix in the [Trie](trie.md).
See: https://en.wikipedia.org/wiki/String_operations#Prefixes

#### Parameters:

Name | Type |
------ | ------ |
`prefix` | string |

**Returns:** boolean

___

### remove

▸ **remove**(`word`: string): boolean

*Defined in [Trie.ts:94](https://github.com/kamilmielnik/trie/blob/4acbb7b/src/Trie.ts#L94)*

Removes word from the [Trie](trie.md) if it exists.
Returns true if word was removed.

#### Parameters:

Name | Type |
------ | ------ |
`word` | string |

**Returns:** boolean

___

### serialize

▸ **serialize**(): string

*Defined in [Trie.ts:102](https://github.com/kamilmielnik/trie/blob/4acbb7b/src/Trie.ts#L102)*

Converts [Trie](trie.md) into a string.
The inverse of [deserialize](trie.md#deserialize).

**Returns:** string

___

### toArray

▸ **toArray**(`options?`: [TraverseOptions](../README.md#traverseoptions)): [TraverseCallbackData](../README.md#traversecallbackdata)[]

*Defined in [Trie.ts:111](https://github.com/kamilmielnik/trie/blob/4acbb7b/src/Trie.ts#L111)*

Returns [Node](../interfaces/node.md) instance and prefix it represents of all Nodes (except root) in the [Trie](trie.md).
Pass "sort: true" to get results in alphabetical order.
Pass "wordsOnly: true" to only get nodes representing complete words.

#### Parameters:

Name | Type |
------ | ------ |
`options?` | [TraverseOptions](../README.md#traverseoptions) |

**Returns:** [TraverseCallbackData](../README.md#traversecallbackdata)[]

___

### traverse

▸ **traverse**(`callback`: [TraverseCallback](../README.md#traversecallback), `options?`: [TraverseOptions](../README.md#traverseoptions)): void

*Defined in [Trie.ts:120](https://github.com/kamilmielnik/trie/blob/4acbb7b/src/Trie.ts#L120)*

Visits every descendant [Node](../interfaces/node.md) in the [Trie](trie.md) and calls a callback for each one.
Return true from callback to stop traversing.
Pass "sort: true" as an option to visit nodes in alphabetical order.

#### Parameters:

Name | Type |
------ | ------ |
`callback` | [TraverseCallback](../README.md#traversecallback) |
`options?` | [TraverseOptions](../README.md#traverseoptions) |

**Returns:** void

___

### deserialize

▸ `Static`**deserialize**(`serialized`: string): [Trie](trie.md)

*Defined in [Trie.ts:26](https://github.com/kamilmielnik/trie/blob/4acbb7b/src/Trie.ts#L26)*

Creates a new [Trie](trie.md) by deserializing given string.
The inverse of [serialize](trie.md#serialize).

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | String with serialized data. |

**Returns:** [Trie](trie.md)

[Trie](trie.md) representing deserialized data.

___

### fromArray

▸ `Static`**fromArray**(`words`: string[]): [Trie](trie.md)

*Defined in [Trie.ts:36](https://github.com/kamilmielnik/trie/blob/4acbb7b/src/Trie.ts#L36)*

Creates a new [Trie](trie.md) based on array of words.

**`params`** words - array of words to put in the [Trie](trie.md).

#### Parameters:

Name | Type |
------ | ------ |
`words` | string[] |

**Returns:** [Trie](trie.md)

New [Trie](trie.md) containing all given words.
