import { CallbackData, Node } from '../types';

import traverse from './traverse';

/**
 * Returns Node instance and prefix it represents of all Nodes (except root) in the Trie.
 * Pass "sort: true" to get results in alphabetical order.
 * Pass "wordsOnly: true" to only get nodes representing complete words.
 */
const toArray = (
  node: Node,
  prefix: string,
  { sort, wordsOnly }: { sort?: boolean; wordsOnly?: boolean } = {}
): CallbackData[] => {
  const array: { node: Node; prefix: string }[] = [];
  const callback: Parameters<typeof traverse>[2] = wordsOnly
    ? (parameters) => {
        if (parameters.node.wordEnd) {
          array.push(parameters);
        }
      }
    : (parameters) => {
        array.push(parameters);
      };

  traverse(node, prefix, callback, { sort });

  return array;
};

export default toArray;
