import { Node } from '../types';

const add = (startNode: Node, suffix: string): void => {
  let node = startNode;

  for (let index = 0; index < suffix.length; ++index) {
    const character = suffix[index];

    if (!node[character]) {
      node[character] = {};
    }

    node = node[character] as Node;
  }

  node.wordEnd = true;
};

export default add;
