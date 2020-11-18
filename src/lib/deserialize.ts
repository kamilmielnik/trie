import { CLOSE_PARENS, OPEN_PARENS } from '../constants';
import { Node } from '../types';

/**
 * Creates a new {@link Node} by deserializing given string.
 *
 * The inverse of {@link serialize}.
 *
 * @param serialized - String with value returned by {@link serialize}.
 * @returns Instance of a root {@link Node} of deserialized string.
 */
const deserialize = (serialized: string): Node => {
  const stack: Node[] = [];
  let node: Node = {};
  let i = 1;

  while (i < serialized.length - 1) {
    const character = serialized[i];
    const nextCharacter = serialized[i + 1];

    ++i;

    if (character === CLOSE_PARENS) {
      const nextNode = stack.pop();

      if (!nextNode) {
        throw new Error(`Syntax error: misplaced "${CLOSE_PARENS}"`);
      }

      node = nextNode;
    } else if (nextCharacter === CLOSE_PARENS) {
      node[character] = { wordEnd: true };

      const nextNode = stack.pop();

      if (!nextNode) {
        throw new Error(`Syntax error: misplaced "${CLOSE_PARENS}"`);
      }

      node = nextNode;
      ++i;
    } else if (nextCharacter === OPEN_PARENS) {
      stack.push(node);
      const newNode = node[character] || {};
      node[character] = newNode;
      node = newNode as Node;
      ++i;
    } else {
      node[character] = { wordEnd: true };
    }
  }

  return node;
};

export default deserialize;
