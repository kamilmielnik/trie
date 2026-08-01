import type { Node } from '../types.ts';

import { find } from './find.ts';
import { isEmpty } from './isEmpty.ts';

/**
 * Tells you whether there are any words with given prefix in the {@link Node}.
 *
 * See: https://en.wikipedia.org/wiki/String_operations#Prefixes
 *
 * @param node - {@link Node} to look for prefix in.
 * @param prefix - Prefix to be found.
 * @returns true if there are any words with given prefix in the {@link Node}, false otherwise.
 */
export const hasPrefix = (node: Node, prefix: string): boolean => {
  const foundNode = find(node, prefix);

  if (!foundNode) {
    return false;
  }

  return !isEmpty(foundNode);
};
