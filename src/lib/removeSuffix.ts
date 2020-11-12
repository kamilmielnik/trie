import { Node } from '../types';

const removeSuffix = (startNode: Node, suffix: string): boolean => {
  if (suffix.length === 0) {
    return false;
  }

  const letter = suffix[0];
  const node = startNode[letter] as Node | undefined;

  if (!node) {
    return false;
  }

  if (suffix.length === 1) {
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

  const removed = removeSuffix(node, suffix.substring(1));

  if (!removed) {
    return false;
  }

  if (Object.keys(node).length === 0) {
    delete startNode[letter];
  }

  return true;
};

export default removeSuffix;
