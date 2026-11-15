import { CLOSE_PARENS, OPEN_PARENS } from '../constants.ts';
import type { Node } from '../types.ts';

/**
 * Creates a new {@link Node} by deserializing given string.
 *
 * The inverse of {@link serialize}.
 *
 * @param serialized - String with value returned by {@link serialize}.
 * @returns Instance of a root {@link Node} of deserialized string.
 */
export function deserialize(serialized: string): Node {
  const root: Node = {};

  if (serialized.length === 0) {
    return root;
  }

  if (serialized[0] !== OPEN_PARENS) {
    throw new Error(`Syntax error: missing "${OPEN_PARENS}" at the start`);
  }

  const stack: Node[] = [];
  let node = root;

  for (let i = 1; i < serialized.length; ++i) {
    const character = serialized[i];

    if (character === CLOSE_PARENS) {
      const parent = stack.pop();

      if (parent) {
        node = parent;
      } else if (i === serialized.length - 1) {
        return root;
      } else {
        throw new Error(`Syntax error: misplaced "${CLOSE_PARENS}"`);
      }
    } else if (character === OPEN_PARENS) {
      throw new Error(`Syntax error: misplaced "${OPEN_PARENS}"`);
    } else if (serialized[i + 1] === OPEN_PARENS) {
      stack.push(node);
      node = getOrCreateChild(node, character);
      ++i;
    } else {
      node[character] = { wordEnd: true };
    }
  }

  throw new Error(`Syntax error: missing "${CLOSE_PARENS}" at the end`);
}

function getOrCreateChild(node: Node, character: string): Node {
  // `character` is one letter, so it is never "wordEnd" (the only key that can be `true`).
  const child = (node[character] as Node | undefined) ?? {};
  node[character] = child;
  return child;
}
