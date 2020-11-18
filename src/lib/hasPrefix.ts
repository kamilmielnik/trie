import { Node } from '../types';

import find from './find';

/**
 * Tells you whether there are any words with given prefix in the {@link Node}.
 *
 * See: https://en.wikipedia.org/wiki/String_operations#Prefixes
 *
 * @param node - {@link Node} to look for prefix in.
 * @param prefix - Prefix to be found.
 * @returns true if there are any words with given prefix in the {@link Node}, false otherwise.
 */
const hasPrefix = (node: Node, prefix: string): boolean => {
  const foundNode = find(node, prefix);
  return foundNode ? Object.keys(foundNode).length > 0 : false;
};

export default hasPrefix;
