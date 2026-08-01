import type { Node } from '../types.ts';

/**
 * Finds {@link Node} representing given prefix in given {@link Node}.
 *
 * @param node - {@link Node} to look for prefix in.
 * @param prefix - Prefix to be found.
 * @returns {@link Node} representing a given prefix, undefined if there is no such node.
 */
export const find = (node: Node, prefix: string): Node | undefined => {
  let currentNode = node;

  for (let index = 0; index < prefix.length; ++index) {
    const nextNode = currentNode[prefix[index]] as Node | undefined;

    if (!nextNode) {
      return undefined;
    }

    currentNode = nextNode;
  }

  return currentNode;
};
