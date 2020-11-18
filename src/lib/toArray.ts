import { Descendant, Node, TraverseOptions } from '../types';

import traverse from './traverse';

/**
 * Finds all {@link Descendant | descendants} of given {@link Node} and returns them as an array.
 *
 * @param node - {@link Node} to look for {@link Descendant | descendants} in.
 * @param prefix - Initial prefix.
 * @param options - See {@link TraverseOptions}.
 * @returns An array of {@link Descendant | descendants}.
 */
const toArray = (node: Node, prefix = '', options: TraverseOptions = {}): Descendant[] => {
  const descendants: Descendant[] = [];
  const callback: Parameters<typeof traverse>[2] = (parameters) => {
    descendants.push(parameters);
  };

  traverse(node, prefix, callback, options);

  return descendants;
};

export default toArray;
