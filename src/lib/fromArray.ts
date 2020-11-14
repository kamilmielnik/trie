import { Node } from '../types';

import add from './add';

/**
 * Creates a new Node based on array of words.
 */
const fromArray = (words: string[]): Node => {
  const node: Node = {};

  words.forEach((word) => add(node, word));

  return node;
};

export default fromArray;
