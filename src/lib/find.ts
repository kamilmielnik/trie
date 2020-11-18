import { Node } from '../types';

/**
 * Finds {@link Node} representing given prefix in given {@link Node}.
 *
 * @param node - {@link Node} to look for prefix in.
 * @param prefix - Prefix to be found.
 * @returns {@link Node} representing a given prefix, undefined if there is no such node.
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
