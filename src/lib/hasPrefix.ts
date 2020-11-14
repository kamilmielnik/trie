import { Node } from '../types';

import find from './find';

/**
 * Returns true if there are any words with given prefix in the Node.
 * See: https://en.wikipedia.org/wiki/String_operations#Prefixes
 */
const hasPrefix = (node: Node, prefix: string): boolean => {
  const foundNode = find(node, prefix);
  return foundNode ? Object.keys(foundNode).length > 0 : false;
};

export default hasPrefix;
