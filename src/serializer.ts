import { Node } from './types';

const SEPARATOR = ',';
const OPEN_PARENS = '(';
const CLOSE_PARENS = ')';

const isNode = (node: any): node is Node => {
  return typeof node === 'object' && node !== null;
};

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
    serialized += letters.map((letter) => serialize(node[letter], letter)).join(SEPARATOR);
    serialized += CLOSE_PARENS;
  }
  return serialized;
};

export const deserialize = (serialized: string): Node => {
  const stack = [];
  let node: Node = {};
  let i = 1;

  while (i < serialized.length - 1) {
    const character = serialized[i];
    const nextCharacter = serialized[++i];

    if (character === CLOSE_PARENS) {
      const nextNode = stack.pop();

      if (!isNode(nextNode)) {
        throw new Error(`"${nextNode}" does not match Node interface`);
      }

      node = nextNode;
    } else if (nextCharacter === SEPARATOR) {
      node[character] = { wordEnd: true };
      ++i;
    } else if (nextCharacter === CLOSE_PARENS) {
      node[character] = { wordEnd: true };

      const nextNode = stack.pop();

      if (!isNode(nextNode)) {
        throw new Error(`"${nextNode}" does not match Node interface`);
      }

      node = nextNode;
      ++i;
    } else if (nextCharacter === OPEN_PARENS) {
      stack.push(node);
      const newNode = node[character] || {};
      node[character] = newNode;
      node = newNode;
      ++i;
    }
  }

  return node;
};
