import { Node } from '../types';

/**
 * Removes given word from given {@link Node} if it exists.
 *
 * @param node - {@link Node} to remove word from.
 * @param word - Word to be removed.
 * @returns true if the word was removed, false otherwise.
 */
const remove = (node: Node, prefix: string): boolean => {
  if (prefix.length === 0) {
    if (!node.wordEnd) {
      return false;
    }

    delete node.wordEnd;

    return true;
  }

  const letter = prefix[0];
  const nextNode = node[letter] as Node | undefined;

  if (!nextNode) {
    return false;
  }

  if (prefix.length === 1) {
    if (!nextNode.wordEnd) {
      return false;
    }

    if (Object.keys(nextNode).length === 1) {
      delete node[letter];
    } else {
      delete nextNode.wordEnd;
    }

    return true;
  }

  const removed = remove(nextNode, prefix.substring(1));

  if (!removed) {
    return false;
  }

  if (Object.keys(nextNode).length === 0) {
    delete node[letter];
  }

  return true;
};

export default remove;
