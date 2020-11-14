**[@kamilmielnik/trie](README.md)**

> Globals

# @kamilmielnik/trie

## Index

### Classes

* [Trie](classes/trie.md)

### Interfaces

* [Node](interfaces/node.md)
* [Options](interfaces/options.md)
* [State](interfaces/state.md)

### Type aliases

* [Callback](README.md#callback)
* [CallbackData](README.md#callbackdata)

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
* [toArray](README.md#toarray)
* [traverse](README.md#traverse)

## Type aliases

### Callback

Ƭ  **Callback**: (data: [CallbackData](README.md#callbackdata)) => boolean \| void

*Defined in [types.ts:1](https://github.com/kamilmielnik/trie/blob/dae7b2d/src/types.ts#L1)*

*Defined in [lib/traverse.ts:5](https://github.com/kamilmielnik/trie/blob/dae7b2d/src/lib/traverse.ts#L5)*

___

### CallbackData

Ƭ  **CallbackData**: { node: [Node](interfaces/node.md) ; prefix: string  }

*Defined in [types.ts:3](https://github.com/kamilmielnik/trie/blob/dae7b2d/src/types.ts#L3)*

#### Type declaration:

Name | Type |
------ | ------ |
`node` | [Node](interfaces/node.md) |
`prefix` | string |

## Variables

### CLOSE\_PARENS

• `Const` **CLOSE\_PARENS**: \")\" = ")"

*Defined in [constants.ts:4](https://github.com/kamilmielnik/trie/blob/dae7b2d/src/constants.ts#L4)*

Represents end of a node in serialized format.

___

### OPEN\_PARENS

• `Const` **OPEN\_PARENS**: \"(\" = "("

*Defined in [constants.ts:9](https://github.com/kamilmielnik/trie/blob/dae7b2d/src/constants.ts#L9)*

Represents start of a node in serialized format.

## Functions

### add

▸ `Const`**add**(`node`: [Node](interfaces/node.md), `word`: string): [Node](interfaces/node.md)

*Defined in [lib/add.ts:7](https://github.com/kamilmielnik/trie/blob/dae7b2d/src/lib/add.ts#L7)*

Inserts given word into given Node.
Returns Node representing last character in the word.

#### Parameters:

Name | Type |
------ | ------ |
`node` | [Node](interfaces/node.md) |
`word` | string |

**Returns:** [Node](interfaces/node.md)

___

### deserialize

▸ `Const`**deserialize**(`serialized`: string): [Node](interfaces/node.md)

*Defined in [lib/deserialize.ts:7](https://github.com/kamilmielnik/trie/blob/dae7b2d/src/lib/deserialize.ts#L7)*

Creates a new Node instance by deserializing given string.

#### Parameters:

Name | Type |
------ | ------ |
`serialized` | string |

**Returns:** [Node](interfaces/node.md)

___

### find

▸ `Const`**find**(`node`: [Node](interfaces/node.md), `prefix`: string): [Node](interfaces/node.md) \| undefined

*Defined in [lib/find.ts:7](https://github.com/kamilmielnik/trie/blob/dae7b2d/src/lib/find.ts#L7)*

Returns Node representing a given prefix starting from a given Node.
Returns undefined if there is no such node.

#### Parameters:

Name | Type |
------ | ------ |
`node` | [Node](interfaces/node.md) |
`prefix` | string |

**Returns:** [Node](interfaces/node.md) \| undefined

___

### fromArray

▸ `Const`**fromArray**(`words`: string[]): [Node](interfaces/node.md)

*Defined in [lib/fromArray.ts:8](https://github.com/kamilmielnik/trie/blob/dae7b2d/src/lib/fromArray.ts#L8)*

Creates a new Node based on array of words.

#### Parameters:

Name | Type |
------ | ------ |
`words` | string[] |

**Returns:** [Node](interfaces/node.md)

___

### has

▸ `Const`**has**(`node`: [Node](interfaces/node.md), `word`: string): boolean

*Defined in [lib/has.ts:8](https://github.com/kamilmielnik/trie/blob/dae7b2d/src/lib/has.ts#L8)*

Returns true if given word is in the Node.

#### Parameters:

Name | Type |
------ | ------ |
`node` | [Node](interfaces/node.md) |
`word` | string |

**Returns:** boolean

___

### hasPrefix

▸ `Const`**hasPrefix**(`node`: [Node](interfaces/node.md), `prefix`: string): boolean

*Defined in [lib/hasPrefix.ts:9](https://github.com/kamilmielnik/trie/blob/dae7b2d/src/lib/hasPrefix.ts#L9)*

Returns true if there are any words with given prefix in the Node.
See: https://en.wikipedia.org/wiki/String_operations#Prefixes

#### Parameters:

Name | Type |
------ | ------ |
`node` | [Node](interfaces/node.md) |
`prefix` | string |

**Returns:** boolean

___

### nodeKeyComparator

▸ `Const`**nodeKeyComparator**(`key1`: string, `key2`: string): number

*Defined in [lib/nodeKeyComparator.ts:1](https://github.com/kamilmielnik/trie/blob/dae7b2d/src/lib/nodeKeyComparator.ts#L1)*

#### Parameters:

Name | Type |
------ | ------ |
`key1` | string |
`key2` | string |

**Returns:** number

___

### remove

▸ `Const`**remove**(`node`: [Node](interfaces/node.md), `prefix`: string): boolean

*Defined in [lib/remove.ts:7](https://github.com/kamilmielnik/trie/blob/dae7b2d/src/lib/remove.ts#L7)*

Removes prefix from the Node if it exists.
Returns true if prefix was removed.

#### Parameters:

Name | Type |
------ | ------ |
`node` | [Node](interfaces/node.md) |
`prefix` | string |

**Returns:** boolean

___

### serialize

▸ `Const`**serialize**(`node`: [Node](interfaces/node.md), `character?`: string): string

*Defined in [lib/serialize.ts:7](https://github.com/kamilmielnik/trie/blob/dae7b2d/src/lib/serialize.ts#L7)*

Converts given Node into a string.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`node` | [Node](interfaces/node.md) | - |
`character` | string | "" |

**Returns:** string

___

### toArray

▸ `Const`**toArray**(`node`: [Node](interfaces/node.md), `prefix`: string, `__namedParameters?`: { sort: undefined \| false \| true ; wordsOnly: undefined \| false \| true  }): [CallbackData](README.md#callbackdata)[]

*Defined in [lib/toArray.ts:10](https://github.com/kamilmielnik/trie/blob/dae7b2d/src/lib/toArray.ts#L10)*

Returns Node instance and prefix it represents of all descendant Nodes.
Pass "sort: true" to get results in alphabetical order.
Pass "wordsOnly: true" to only get nodes representing complete words.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`node` | [Node](interfaces/node.md) | - |
`prefix` | string | - |
`__namedParameters` | { sort: undefined \| false \| true ; wordsOnly: undefined \| false \| true  } | {} |

**Returns:** [CallbackData](README.md#callbackdata)[]

___

### traverse

▸ `Const`**traverse**(`node`: [Node](interfaces/node.md), `prefix`: string, `callback`: [Callback](README.md#callback), `options?`: [Options](interfaces/options.md)): void

*Defined in [lib/traverse.ts:23](https://github.com/kamilmielnik/trie/blob/dae7b2d/src/lib/traverse.ts#L23)*

Visits every descendant Node and calls a callback for each one.
Return true from callback to stop traversing.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`node` | [Node](interfaces/node.md) | - |
`prefix` | string | - |
`callback` | [Callback](README.md#callback) | - |
`options` | [Options](interfaces/options.md) | {} |

**Returns:** void
