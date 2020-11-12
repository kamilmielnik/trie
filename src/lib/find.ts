import { Node } from '../types';

const find = (startNode: Node, prefix: string): Node | null => {
  let node = startNode;

  for (let index = 0; index < prefix.length; ++index) {
    const character = prefix[index];

    if (!node[character]) {
      return null;
    }

    node = node[character] as Node;
  }

  return node;
};

export default find;
