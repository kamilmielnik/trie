import { Node } from '../types';

/**
 * Inserts given suffix into given Node.
 * Returns Node representing last character in the suffix.
 * Does not mark the suffix as a wordEnd.
 */
const add = (startNode: Node, suffix: string): Node => {
  let node = startNode;

  for (let index = 0; index < suffix.length; ++index) {
    const character = suffix[index];

    if (!node[character]) {
      node[character] = {};
    }

    node = node[character] as Node;
  }

  return node;
};

export default add;
