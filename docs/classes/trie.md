**[@kamilmielnik/trie](../README.md)**

> [Globals](../README.md) / Trie

# Class: Trie

A class representing the Trie data structure (https://en.wikipedia.org/wiki/Trie).

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

*Defined in [Trie.ts:38](https://github.com/kamilmielnik/trie/blob/f60501b/src/Trie.ts#L38)*

Creates a new Trie with optionally given root Node.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`root` | [Node](../interfaces/node.md) | {} |

**Returns:** [Trie](trie.md)

## Properties

### root

• `Readonly` **root**: [Node](../interfaces/node.md)

*Defined in [Trie.ts:38](https://github.com/kamilmielnik/trie/blob/f60501b/src/Trie.ts#L38)*

Readonly property. Represents the root Node of the Trie.
It's not a copy. Mutate at your own risk.

## Methods

### add

▸ **add**(`word`: string): [Node](../interfaces/node.md)

*Defined in [Trie.ts:51](https://github.com/kamilmielnik/trie/blob/f60501b/src/Trie.ts#L51)*

Inserts given word into the Trie.
Returns Node representing last character in the word.

#### Parameters:

Name | Type |
------ | ------ |
`word` | string |

**Returns:** [Node](../interfaces/node.md)

___

### find

▸ **find**(`prefix`: string): [Node](../interfaces/node.md) \| undefined

*Defined in [Trie.ts:59](https://github.com/kamilmielnik/trie/blob/f60501b/src/Trie.ts#L59)*

Returns Node representing a given prefix.
Returns undefined if there is no such Node.

#### Parameters:

Name | Type |
------ | ------ |
`prefix` | string |

**Returns:** [Node](../interfaces/node.md) \| undefined

___

### has

▸ **has**(`word`: string): boolean

*Defined in [Trie.ts:66](https://github.com/kamilmielnik/trie/blob/f60501b/src/Trie.ts#L66)*

Returns true if given word is in the Trie.

#### Parameters:

Name | Type |
------ | ------ |
`word` | string |

**Returns:** boolean

___

### hasPrefix

▸ **hasPrefix**(`prefix`: string): boolean

*Defined in [Trie.ts:74](https://github.com/kamilmielnik/trie/blob/f60501b/src/Trie.ts#L74)*

Returns true if there are any words with given prefix in the Trie.
See: https://en.wikipedia.org/wiki/String_operations#Prefixes

#### Parameters:

Name | Type |
------ | ------ |
`prefix` | string |

**Returns:** boolean

___

### remove

▸ **remove**(`word`: string): boolean

*Defined in [Trie.ts:82](https://github.com/kamilmielnik/trie/blob/f60501b/src/Trie.ts#L82)*

Removes word from the Trie if it exists.
Returns true if word was removed.

#### Parameters:

Name | Type |
------ | ------ |
`word` | string |

**Returns:** boolean

___

### serialize

▸ **serialize**(): string

*Defined in [Trie.ts:90](https://github.com/kamilmielnik/trie/blob/f60501b/src/Trie.ts#L90)*

Converts Trie into a string.
The inverse of Trie.deserialize.

**Returns:** string

___

### toArray

▸ **toArray**(`options?`: [TraverseOptions](../README.md#traverseoptions)): [TraverseCallbackData](../README.md#traversecallbackdata)[]

*Defined in [Trie.ts:99](https://github.com/kamilmielnik/trie/blob/f60501b/src/Trie.ts#L99)*

Returns Node instance and prefix it represents of all Nodes (except root) in the Trie.
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

*Defined in [Trie.ts:108](https://github.com/kamilmielnik/trie/blob/f60501b/src/Trie.ts#L108)*

Visits every descendant Node in the Trie and calls a callback for each one.
Return true from callback to stop traversing.
Pass "sort: true" as an option to visit Nodes in alphabetical order.

#### Parameters:

Name | Type |
------ | ------ |
`callback` | [TraverseCallback](../README.md#traversecallback) |
`options?` | [TraverseOptions](../README.md#traverseoptions) |

**Returns:** void

___

### deserialize

▸ `Static`**deserialize**(`serialized`: string): [Trie](trie.md)

*Defined in [Trie.ts:23](https://github.com/kamilmielnik/trie/blob/f60501b/src/Trie.ts#L23)*

Creates a new Trie by deserializing given string.
The inverse of Trie.prototype.serialize.

#### Parameters:

Name | Type |
------ | ------ |
`serialized` | string |

**Returns:** [Trie](trie.md)

___

### fromArray

▸ `Static`**fromArray**(`words`: string[]): [Trie](trie.md)

*Defined in [Trie.ts:30](https://github.com/kamilmielnik/trie/blob/f60501b/src/Trie.ts#L30)*

Creates a new Trie based on array of words.

#### Parameters:

Name | Type |
------ | ------ |
`words` | string[] |

**Returns:** [Trie](trie.md)
