[@kamilmielnik/trie](../README.md) / Node

# Interface: Node

Keys are single characters (strings of length 1) or "wordEnd".
"wordEnd: true" indicates that keys of all parent [Nodes](Node.md) make a valid word when joined together.

## Hierarchy

- `Record`\<`string`, [`Node`](Node.md) \| ``true`` \| `undefined`\>

  ↳ **`Node`**

## Table of contents

### Properties

- [wordEnd](Node.md#wordend)

## Properties

### wordEnd

• `Optional` **wordEnd**: ``true``

#### Defined in

[types.ts:6](https://github.com/kamilmielnik/trie/blob/master/src/types.ts#L6)
