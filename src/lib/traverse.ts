import { Node } from '../types';

type Callback = (parameters: { node: Node; prefix: string }) => boolean | void;

interface State {
  node: Node;
  keyIndex: number;
}

const traverse = (node: Node, prefix: string, callback: Callback): boolean => {
  const stack: State[] = [];
  let currentNode: Node | undefined = node;
  let currentKeyIndex = 0;
  let currentPrefix = prefix;

  while (stack.length > 0 || currentNode) {
    if (currentNode) {
      const keys = Object.keys(currentNode);
      const key = keys[currentKeyIndex];

      if (currentKeyIndex >= keys.length) {
        currentNode = undefined;
      } else if (key === 'wordEnd') {
        const shouldStop = callback({ node: currentNode, prefix: currentPrefix });

        if (shouldStop) {
          return true;
        }

        ++currentKeyIndex;
      } else {
        stack.push({ node: currentNode, keyIndex: currentKeyIndex });

        currentNode = currentNode[key] as Node | undefined;
        currentKeyIndex = 0;
        currentPrefix += key;
      }
    } else {
      const state = stack.pop() as State;

      currentNode = state.node;
      currentKeyIndex = state.keyIndex + 1;
      currentPrefix = currentPrefix.slice(0, -1);
    }
  }

  return false;
};

export default traverse;
