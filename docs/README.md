**[@kamilmielnik/trie](README.md)**

> Globals

# @kamilmielnik/trie

## Index

### Classes

* [Trie](classes/trie.md)

### Interfaces

* [Node](interfaces/node.md)

### Type aliases

* [Descendant](README.md#descendant)
* [TraverseCallback](README.md#traversecallback)
* [TraverseOptions](README.md#traverseoptions)
* [TraverseState](README.md#traversestate)

### Variables

* [CLOSE\_PARENS](README.md#close_parens)
* [OPEN\_PARENS](README.md#open_parens)

### Functions

* [add](README.md#add)
* [deserialize](README.md#deserialize)
* [find](README.md#find)
* [fromArray](README.md#fromarray)
* [has](README.md#has)
* [hasPrefix](README.md#hasprefix)
* [nodeKeyComparator](README.md#nodekeycomparator)
* [remove](README.md#remove)
* [serialize](README.md#serialize)
* [serializeNode](README.md#serializenode)
* [toArray](README.md#toarray)
* [traverse](README.md#traverse)

## Type aliases

### Descendant

Ƭ  **Descendant**: { node: [Node](interfaces/node.md) ; prefix: string  }

*Defined in [types.ts:11](https://github.com/kamilmielnik/trie/blob/2653c58/src/types.ts#L11)*

#### Type declaration:

Name | Type |
------ | ------ |
`node` | [Node](interfaces/node.md) |
`prefix` | string |

___

### TraverseCallback

Ƭ  **TraverseCallback**: (descendant: [Descendant](README.md#descendant)) => boolean \| void

*Defined in [types.ts:9](https://github.com/kamilmielnik/trie/blob/2653c58/src/types.ts#L9)*

___

### TraverseOptions

Ƭ  **TraverseOptions**: { sort?: undefined \| false \| true ; wordsOnly?: undefined \| false \| true  }

*Defined in [types.ts:16](https://github.com/kamilmielnik/trie/blob/2653c58/src/types.ts#L16)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`sort?` | undefined \| false \| true | Set to true to visit nodes in alphabetical order. Defaults to false. |
`wordsOnly?` | undefined \| false \| true | Set to true to only visit nodes representing complete words. Defaults to false. |

___

### TraverseState

Ƭ  **TraverseState**: { keyIndex: number ; node: [Node](interfaces/node.md)  }

*Defined in [lib/traverse.ts:5](https://github.com/kamilmielnik/trie/blob/2653c58/src/lib/traverse.ts#L5)*

#### Type declaration:

Name | Type |
------ | ------ |
`keyIndex` | number |
`node` | [Node](interfaces/node.md) |

## Variables

### CLOSE\_PARENS

• `Const` **CLOSE\_PARENS**: \")\" = ")"

*Defined in [constants.ts:4](https://github.com/kamilmielnik/trie/blob/2653c58/src/constants.ts#L4)*

Represents end of a node in serialized format.

___

### OPEN\_PARENS

• `Const` **OPEN\_PARENS**: \"(\" = "("

*Defined in [constants.ts:9](https://github.com/kamilmielnik/trie/blob/2653c58/src/constants.ts#L9)*

Represents start of a node in serialized format.

## Functions

### add

▸ `Const`**add**(`node`: [Node](interfaces/node.md), `word`: string): [Node](interfaces/node.md)

*Defined in [lib/add.ts:10](https://github.com/kamilmielnik/trie/blob/2653c58/src/lib/add.ts#L10)*

Inserts given `word` into given `node`.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`node` | [Node](interfaces/node.md) | [Node](interfaces/node.md) to insert the `word` to. |
`word` | string | Word to be inserted into `node`. |

**Returns:** [Node](interfaces/node.md)

[Node](interfaces/node.md) representing the end of the added word.

___

### deserialize

▸ `Const`**deserialize**(`serialized`: string): [Node](interfaces/node.md)

*Defined in [lib/deserialize.ts:12](https://github.com/kamilmielnik/trie/blob/2653c58/src/lib/deserialize.ts#L12)*

Creates a new [Node](interfaces/node.md) by deserializing given string.

The inverse of [serialize](README.md#serialize).

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`serialized` | string | String with value returned by [serialize](README.md#serialize). |

**Returns:** [Node](interfaces/node.md)

Instance of a root [Node](interfaces/node.md) of deserialized string.

___

### find

▸ `Const`**find**(`node`: [Node](interfaces/node.md), `prefix`: string): [Node](interfaces/node.md) \| undefined

*Defined in [lib/find.ts:10](https://github.com/kamilmielnik/trie/blob/2653c58/src/lib/find.ts#L10)*

Finds [Node](interfaces/node.md) representing given prefix in given [Node](interfaces/node.md).

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`node` | [Node](interfaces/node.md) | [Node](interfaces/node.md) to look for prefix in. |
`prefix` | string | Prefix to be found. |

**Returns:** [Node](interfaces/node.md) \| undefined

[Node](interfaces/node.md) representing a given prefix, undefined if there is no such node.

___

### fromArray

▸ `Const`**fromArray**(`words`: string[]): [Node](interfaces/node.md)

*Defined in [lib/fromArray.ts:11](https://github.com/kamilmielnik/trie/blob/2653c58/src/lib/fromArray.ts#L11)*

Creates a new [Node](interfaces/node.md) based on array of words.

**`params`** words - array of words to put in the [Node](interfaces/node.md).

#### Parameters:

Name | Type |
------ | ------ |
`words` | string[] |

**Returns:** [Node](interfaces/node.md)

New [Node](interfaces/node.md) containing all given words.

___

### has

▸ `Const`**has**(`node`: [Node](interfaces/node.md), `word`: string): boolean

*Defined in [lib/has.ts:12](https://github.com/kamilmielnik/trie/blob/2653c58/src/lib/has.ts#L12)*

Tells you whether given word is in the [Node](interfaces/node.md).

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`node` | [Node](interfaces/node.md) | [Node](interfaces/node.md) to look for word in. |
`word` | string | Word to be found. |

**Returns:** boolean

true if given word is in the [Node](interfaces/node.md), false otherwise.

___

### hasPrefix

▸ `Const`**hasPrefix**(`node`: [Node](interfaces/node.md), `prefix`: string): boolean

*Defined in [lib/hasPrefix.ts:14](https://github.com/kamilmielnik/trie/blob/2653c58/src/lib/hasPrefix.ts#L14)*

Tells you whether there are any words with given prefix in the [Node](interfaces/node.md).

See: https://en.wikipedia.org/wiki/String_operations#Prefixes

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`node` | [Node](interfaces/node.md) | [Node](interfaces/node.md) to look for prefix in. |
`prefix` | string | Prefix to be found. |

**Returns:** boolean

true if there are any words with given prefix in the [Node](interfaces/node.md), false otherwise.

___

### nodeKeyComparator

▸ `Const`**nodeKeyComparator**(`key1`: string, `key2`: string): number

*Defined in [lib/nodeKeyComparator.ts:9](https://github.com/kamilmielnik/trie/blob/2653c58/src/lib/nodeKeyComparator.ts#L9)*

Comparator that allows sorting [Node](interfaces/node.md) keys alphabetically
with the exception of "wordEnd" which should always come first.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key1` | string | First key to compare. |
`key2` | string | Second key to compare. |

**Returns:** number

-1 if key1 should precede key2, 0 if they're the same, 1 if key2 should precede key1.

___

### remove

▸ `Const`**remove**(`node`: [Node](interfaces/node.md), `prefix`: string): boolean

*Defined in [lib/remove.ts:10](https://github.com/kamilmielnik/trie/blob/2653c58/src/lib/remove.ts#L10)*

Removes given word from given [Node](interfaces/node.md) if it exists.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`node` | [Node](interfaces/node.md) | [Node](interfaces/node.md) to remove word from. |
`prefix` | string | - |

**Returns:** boolean

true if the word was removed, false otherwise.

___

### serialize

▸ `Const`**serialize**(`node`: [Node](interfaces/node.md)): string

*Defined in [lib/serialize.ts:37](https://github.com/kamilmielnik/trie/blob/2653c58/src/lib/serialize.ts#L37)*

Converts given [Node](interfaces/node.md) into a string.

The inverse of [deserialize](README.md#deserialize).

It serializes [41 MB Polish dictionary](https://sjp.pl/slownik/growy/) down to 12 MB (-71%).

It serializes [1.9 MB English (US) dictionary](https://www.wordgamedictionary.com/twl06/download/twl06.txt) down to 993 KB (-48%).

It serializes [2.9 MB English (GB) dictionary](https://www.wordgamedictionary.com/sowpods/download/sowpods.txt) down to 1.5 MB (-49%).

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`node` | [Node](interfaces/node.md) | [Node](interfaces/node.md) to serialize. |

**Returns:** string

String with serialized data.

___

### serializeNode

▸ `Const`**serializeNode**(`node`: [Node](interfaces/node.md), `character`: string): string

*Defined in [lib/serialize.ts:4](https://github.com/kamilmielnik/trie/blob/2653c58/src/lib/serialize.ts#L4)*

#### Parameters:

Name | Type |
------ | ------ |
`node` | [Node](interfaces/node.md) |
`character` | string |

**Returns:** string

___

### toArray

▸ `Const`**toArray**(`node`: [Node](interfaces/node.md), `prefix?`: string, `options?`: [TraverseOptions](README.md#traverseoptions)): [Descendant](README.md#descendant)[]

*Defined in [lib/toArray.ts:13](https://github.com/kamilmielnik/trie/blob/2653c58/src/lib/toArray.ts#L13)*

Finds all [descendants](README.md#descendant) of given [Node](interfaces/node.md) and returns them as an array.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`node` | [Node](interfaces/node.md) | - | [Node](interfaces/node.md) to look for [descendants](README.md#descendant) in. |
`prefix` | string | "" | Initial prefix. |
`options` | [TraverseOptions](README.md#traverseoptions) | {} | See [TraverseOptions](README.md#traverseoptions). |

**Returns:** [Descendant](README.md#descendant)[]

An array of [descendants](README.md#descendant).

___

### traverse

▸ `Const`**traverse**(`node`: [Node](interfaces/node.md), `prefix`: string, `callback`: [TraverseCallback](README.md#traversecallback), `options?`: [TraverseOptions](README.md#traverseoptions)): void

*Defined in [lib/traverse.ts:18](https://github.com/kamilmielnik/trie/blob/2653c58/src/lib/traverse.ts#L18)*

Visits every descendant [Node](interfaces/node.md) of given [Node](interfaces/node.md) and calls a callback.

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`node` | [Node](interfaces/node.md) | - | [Node](interfaces/node.md) to look for descendant [Nodes](interfaces/node.md) in. |
`prefix` | string | - | Initial prefix. |
`callback` | [TraverseCallback](README.md#traversecallback) | - | Callback that will be called for each visited [Node](interfaces/node.md). Return true from callback to stop traversing. |
`options` | [TraverseOptions](README.md#traverseoptions) | {} | See [TraverseOptions](README.md#traverseoptions).  |

**Returns:** void
