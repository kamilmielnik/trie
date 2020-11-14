import { Node } from '../types';

import find from './find';

/**
 * Returns true if given suffix is in the Node.
 */
const has = (node: Node, suffix: string): boolean => {
  const foundNode = find(node, suffix);
  return Boolean(foundNode && foundNode.wordEnd);
};

export default has;
