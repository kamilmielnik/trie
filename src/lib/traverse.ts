import { Node } from '../types';

type Callback = (parameters: { node: Node; word: string }) => boolean | void;

/**
 * TODO: update jsdoc
 */
const traverseNode = (node: Node, word: string, callback: Callback): boolean => {
  if (node.wordEnd) {
    const shouldBreak = callback({ node, word });

    if (shouldBreak) {
      return true;
    }
  }

  const sortedEntries = Object.entries(node).sort(([key1], [key2]) => key1.localeCompare(key2));

  for (const [key, value] of sortedEntries) {
    if (key !== 'wordEnd') {
      const shouldBreak = traverseNode(value as Node, word + key, callback);

      if (shouldBreak) {
        return true;
      }
    }
  }

  return false;
};

/**
 * TODO: update jsdoc
 */
const traverse = (node: Node, callback: Callback): void => {
  traverseNode(node, '', callback);
};

export default traverse;
