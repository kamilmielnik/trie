import { Node, TraverseCallbackData, TraverseOptions } from '../types';

import traverse from './traverse';

/**
 * Returns Node instance and prefix it represents of all descendant Nodes.
 * Pass "sort: true" to get results in alphabetical order.
 * Pass "wordsOnly: true" to only get nodes representing complete words.
 */
const toArray = (
  node: Node,
  prefix: string,
  options: TraverseOptions = {}
): TraverseCallbackData[] => {
  const array: { node: Node; prefix: string }[] = [];
  const callback: Parameters<typeof traverse>[2] = (parameters) => {
    array.push(parameters);
  };

  traverse(node, prefix, callback, options);

  return array;
};

export default toArray;
