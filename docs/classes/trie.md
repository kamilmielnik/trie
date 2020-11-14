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

*Defined in [Trie.ts:38](https://github.com/kamilmielnik/trie/blob/573639d/src/Trie.ts#L38)*

Creates a new Trie with optionally given root Node.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`root` | [Node](../interfaces/node.md) | {} |

**Returns:** [Trie](trie.md)

## Properties

### root

• `Readonly` **root**: [Node](../interfaces/node.md)

*Defined in [Trie.ts:38](https://github.com/kamilmielnik/trie/blob/573639d/src/Trie.ts#L38)*

Readonly property. Represents the root Node of the Trie.
It's not a copy. Mutate at your own risk.

## Methods

### add

▸ **add**(`word`: Parameters\<*typeof* add>[1]): ReturnType\<*typeof* [add](../README.md#add)>

*Defined in [Trie.ts:51](https://github.com/kamilmielnik/trie/blob/573639d/src/Trie.ts#L51)*

Inserts given word into the Trie.
Returns Node representing last character in the word.

#### Parameters:

Name | Type |
------ | ------ |
`word` | Parameters\<*typeof* add>[1] |

**Returns:** ReturnType\<*typeof* [add](../README.md#add)>

___

### find

▸ **find**(`prefix`: Parameters\<*typeof* find>[1]): ReturnType\<*typeof* [find](../README.md#find)>

*Defined in [Trie.ts:59](https://github.com/kamilmielnik/trie/blob/573639d/src/Trie.ts#L59)*

Returns Node representing a given prefix.
Returns undefined if there is no such Node.

#### Parameters:

Name | Type |
------ | ------ |
`prefix` | Parameters\<*typeof* find>[1] |

**Returns:** ReturnType\<*typeof* [find](../README.md#find)>

___

### has

▸ **has**(`word`: Parameters\<*typeof* has>[1]): ReturnType\<*typeof* [has](../README.md#has)>

*Defined in [Trie.ts:66](https://github.com/kamilmielnik/trie/blob/573639d/src/Trie.ts#L66)*

Returns true if given word is in the Trie.

#### Parameters:

Name | Type |
------ | ------ |
`word` | Parameters\<*typeof* has>[1] |

**Returns:** ReturnType\<*typeof* [has](../README.md#has)>

___

### hasPrefix

▸ **hasPrefix**(`prefix`: Parameters\<*typeof* hasPrefix>[1]): ReturnType\<*typeof* [hasPrefix](../README.md#hasprefix)>

*Defined in [Trie.ts:74](https://github.com/kamilmielnik/trie/blob/573639d/src/Trie.ts#L74)*

Returns true if there are any words with given prefix in the Trie.
See: https://en.wikipedia.org/wiki/String_operations#Prefixes

#### Parameters:

Name | Type |
------ | ------ |
`prefix` | Parameters\<*typeof* hasPrefix>[1] |

**Returns:** ReturnType\<*typeof* [hasPrefix](../README.md#hasprefix)>

___

### remove

▸ **remove**(`word`: Parameters\<*typeof* remove>[1]): ReturnType\<*typeof* [remove](../README.md#remove)>

*Defined in [Trie.ts:82](https://github.com/kamilmielnik/trie/blob/573639d/src/Trie.ts#L82)*

Removes word from the Trie if it exists.
Returns true if word was removed.

#### Parameters:

Name | Type |
------ | ------ |
`word` | Parameters\<*typeof* remove>[1] |

**Returns:** ReturnType\<*typeof* [remove](../README.md#remove)>

___

### serialize

▸ **serialize**(): ReturnType\<*typeof* [serialize](../README.md#serialize)>

*Defined in [Trie.ts:90](https://github.com/kamilmielnik/trie/blob/573639d/src/Trie.ts#L90)*

Converts Trie into a string.
The inverse of Trie.deserialize.

**Returns:** ReturnType\<*typeof* [serialize](../README.md#serialize)>

___

### toArray

▸ **toArray**(`parameters?`: Parameters\<*typeof* toArray>[2]): ReturnType\<*typeof* [toArray](../README.md#toarray)>

*Defined in [Trie.ts:99](https://github.com/kamilmielnik/trie/blob/573639d/src/Trie.ts#L99)*

Returns Node instance and prefix it represents of all Nodes (except root) in the Trie.
Pass "sort: true" to get results in alphabetical order.
Pass "wordsOnly: true" to only get nodes representing complete words.

#### Parameters:

Name | Type |
------ | ------ |
`parameters?` | Parameters\<*typeof* toArray>[2] |

**Returns:** ReturnType\<*typeof* [toArray](../README.md#toarray)>

___

### traverse

▸ **traverse**(`callback`: Parameters\<*typeof* traverse>[2], `options?`: Parameters\<*typeof* traverse>[3]): ReturnType\<*typeof* [traverse](../README.md#traverse)>

*Defined in [Trie.ts:108](https://github.com/kamilmielnik/trie/blob/573639d/src/Trie.ts#L108)*

Visits every descendant Node in the Trie and calls a callback for each one.
Return true from callback to stop traversing.
Pass "sort: true" as an option to visit Nodes in alphabetical order.

#### Parameters:

Name | Type |
------ | ------ |
`callback` | Parameters\<*typeof* traverse>[2] |
`options?` | Parameters\<*typeof* traverse>[3] |

**Returns:** ReturnType\<*typeof* [traverse](../README.md#traverse)>

___

### deserialize

▸ `Static`**deserialize**(`serialized`: Parameters\<*typeof* deserialize>[0]): [Trie](trie.md)

*Defined in [Trie.ts:23](https://github.com/kamilmielnik/trie/blob/573639d/src/Trie.ts#L23)*

Creates a new Trie by deserializing given string.
The inverse of Trie.prototype.serialize.

#### Parameters:

Name | Type |
------ | ------ |
`serialized` | Parameters\<*typeof* deserialize>[0] |

**Returns:** [Trie](trie.md)

___

### fromArray

▸ `Static`**fromArray**(`words`: Parameters\<*typeof* fromArray>[0]): [Trie](trie.md)

*Defined in [Trie.ts:30](https://github.com/kamilmielnik/trie/blob/573639d/src/Trie.ts#L30)*

Creates a new Trie based on array of words.

#### Parameters:

Name | Type |
------ | ------ |
`words` | Parameters\<*typeof* fromArray>[0] |

**Returns:** [Trie](trie.md)
