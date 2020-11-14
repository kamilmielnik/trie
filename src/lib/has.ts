import { Node } from '../types';

import find from './find';

/**
 * Returns true if given word is in the Node.
 */
const has = (node: Node, word: string): boolean => {
  const foundNode = find(node, word);
  return Boolean(foundNode && foundNode.wordEnd);
};

export default has;
