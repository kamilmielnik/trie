import type { Node } from '../types.ts';

import { find } from './find.ts';

/**
 * Tells you whether given word is in the {@link Node}.
 *
 * @param node - {@link Node} to look for word in.
 * @param word - Word to be found.
 * @returns true if given word is in the {@link Node}, false otherwise.
 */
export const has = (node: Node, word: string): boolean => {
  const foundNode = find(node, word);
  return Boolean(foundNode?.wordEnd);
};
