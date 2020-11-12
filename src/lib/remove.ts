import { Node } from '../types';

const remove = (startNode: Node, prefix: string): boolean => {
  if (prefix.length === 0) {
    return false;
  }

  const letter = prefix[0];
  const node = startNode[letter] as Node | undefined;

  if (!node) {
    return false;
  }

  if (prefix.length === 1) {
    if (!node.wordEnd) {
      return false;
    }

    if (Object.keys(node).length === 1) {
      delete startNode[letter];
    } else {
      delete node.wordEnd;
    }

    return true;
  }

  const removed = remove(node, prefix.substring(1));

  if (!removed) {
    return false;
  }

  if (Object.keys(node).length === 0) {
    delete startNode[letter];
  }

  return true;
};

export default remove;
