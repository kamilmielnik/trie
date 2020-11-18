import { Node } from '../types';

/**
 * Inserts given `word` into given `node`.
 *
 * @param node - {@link Node} to insert the `word` to.
 * @param word - Word to be inserted into `node`.
 * @returns {@link Node} representing the end of the added word.
 */
const add = (node: Node, word: string): Node => {
  let currentNode = node;

  for (let index = 0; index < word.length; ++index) {
    const character = word[index];

    if (!currentNode[character]) {
      currentNode[character] = {};
    }

    currentNode = currentNode[character] as Node;
  }

  currentNode.wordEnd = true;

  return currentNode;
};

export default add;
