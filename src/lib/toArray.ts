import type { Descendant, Node, TraverseCallback, TraverseOptions } from '../types.ts';

import { traverse } from './traverse.ts';

/**
 * Finds all {@link Descendant | descendants} of given {@link Node} and returns them as an array.
 *
 * @param node - {@link Node} to look for {@link Descendant | descendants} in.
 * @param options - See {@link TraverseOptions}.
 * @returns An array of {@link Descendant | descendants}.
 */
export const toArray = (node: Node, options?: TraverseOptions): Descendant[] => {
  const descendants: Descendant[] = [];
  const callback: TraverseCallback = (parameters) => {
    descendants.push(parameters);
  };

  traverse(node, callback, options);

  return descendants;
};
