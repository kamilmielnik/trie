import { Node } from '../types';

/**
 * Inserts given suffix into given Node.
 * Returns Node representing last character in the suffix.
 * Does not mark the suffix as a wordEnd.
 */
const add = (node: Node, suffix: string): Node => {
  let currentNode = node;

  for (let index = 0; index < suffix.length; ++index) {
    const character = suffix[index];

    if (!currentNode[character]) {
      currentNode[character] = {};
    }

    currentNode = currentNode[character] as Node;
  }

  return currentNode;
};

export default add;
