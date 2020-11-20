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
    if (node.wordEnd) {
      delete node.wordEnd;
      return true;
    }

    return false;
  }

  const letter = prefix[0];
  const nextNode = node[letter] as Node | undefined;

  if (!nextNode) {
    return false;
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
