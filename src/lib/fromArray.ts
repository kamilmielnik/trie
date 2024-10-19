import type { Node } from '../types';

import { add } from './add';

/**
 * Creates a new {@link Node} based on array of words.
 *
 * @param words - array of words to put in the {@link Node}.
 * @returns New {@link Node} containing all given words.
 */
export const fromArray = (words: string[]): Node => {
  const node: Node = {};

  words.forEach((word) => add(node, word));

  return node;
};
