import { Node } from '../types';

/**
 * Returns Node representing a given prefix starting from a given Node.
 * Returns undefined if there is no such node.
 */
const find = (node: Node, prefix: string): Node | undefined => {
  let currentNode = node;

  for (let index = 0; index < prefix.length; ++index) {
    const character = prefix[index];

    if (!currentNode[character]) {
      return undefined;
    }

    currentNode = currentNode[character] as Node;
  }

  return currentNode;
};

export default find;
