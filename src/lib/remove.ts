import type { Node } from '../types.ts';
import { isEmpty } from './isEmpty.ts';

/**
 * Removes given word from given {@link Node} if it exists.
 *
 * @param node - {@link Node} to remove word from.
 * @param word - Word to be removed.
 * @returns true if the word was removed, false otherwise.
 */
export const remove = (node: Node, word: string): boolean => {
  const path: Node[] = [node];
  let currentNode = node;

  for (let index = 0; index < word.length; ++index) {
    const nextNode = currentNode[word[index]] as Node | undefined;

    if (!nextNode) {
      return false;
    }

    currentNode = nextNode;
    path.push(currentNode);
  }

  if (!currentNode.wordEnd) {
    return false;
  }

  delete currentNode.wordEnd;

  for (let index = word.length; index > 0 && isEmpty(path[index]); --index) {
    delete path[index - 1][word[index - 1]];
  }

  return true;
};
