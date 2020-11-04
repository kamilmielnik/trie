import { Node } from './types';

const SEPARATOR = ',';
const OPEN_PARENS = '(';
const CLOSE_PARENS = ')';

export const serialize = (node: Node, character: string = ''): string => {
  const letters = Object.keys(node).filter((key) => key.length === 1);
  const hasMore = letters.length > 0;
  let serialized = '';
  if (node.wordEnd) {
    serialized += character;
  }
  if (node.wordEnd && hasMore) {
    serialized += SEPARATOR;
  }
  if (hasMore) {
    serialized += character;
    serialized += OPEN_PARENS;
    serialized += letters.map((letter) => serialize(node[letter] as Node, letter)).join(SEPARATOR);
    serialized += CLOSE_PARENS;
  }
  return serialized;
};

export const deserialize = (serialized: string): Node => {
  const stack: Node[] = [];
  let node: Node = {};
  let i = 1;

  while (i < serialized.length - 1) {
    const character = serialized[i];
    const nextCharacter = serialized[++i];

    if (character === CLOSE_PARENS) {
      const nextNode = stack.pop();

      if (!nextNode) {
        throw new Error(`Syntax error: misplaced "${CLOSE_PARENS}"`);
      }

      node = nextNode;
    } else if (nextCharacter === SEPARATOR) {
      node[character] = { wordEnd: true };
      ++i;
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
    }
  }

  if (stack.length > 0) {
    throw new Error(`Syntax error: missing ${stack.length} "${CLOSE_PARENS}"`);
  }

  return node;
};
