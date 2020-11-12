import { Node } from '../types';

const find = (node: Node, prefix: string): Node | null => {
  let currentNode = node;

  for (let index = 0; index < prefix.length; ++index) {
    const character = prefix[index];

    if (!currentNode[character]) {
      return null;
    }

    currentNode = currentNode[character] as Node;
  }

  return currentNode;
};

export default find;
