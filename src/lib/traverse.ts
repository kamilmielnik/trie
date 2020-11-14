import { Node } from '../types';

type Callback = (parameters: { node: Node; prefix: string }) => boolean | void;

interface State {
  keyIndex: number;
  node: Node;
}

const sortKeys = (keys: string[]): string[] =>
  keys.sort((key1, key2) => {
    if (key1 === 'wordEnd') {
      return -1;
    }

    if (key2 === 'wordEnd') {
      return 1;
    }

    return key1.localeCompare(key2);
  });

const traverse = (node: Node, prefix: string, callback: Callback): void => {
  const stack: State[] = [];
  let currentKeyIndex = 0;
  let currentNode: Node | undefined = node;
  let currentPrefix = prefix;

  while (stack.length > 0 || currentNode) {
    while (currentNode) {
      const keys = sortKeys(Object.keys(currentNode));

      if (currentKeyIndex >= keys.length) {
        currentNode = undefined;
      } else {
        const key = keys[currentKeyIndex];

        if (key === 'wordEnd') {
          ++currentKeyIndex;
        } else {
          stack.push({ keyIndex: currentKeyIndex, node: currentNode });

          currentKeyIndex = 0;
          currentNode = currentNode[key] as Node | undefined;
          currentPrefix += key;

          if (currentNode) {
            const shouldStop = callback({ node: currentNode, prefix: currentPrefix });

            if (shouldStop) {
              return;
            }
          }
        }
      }
    }

    if (stack.length > 0) {
      const state = stack.pop() as State;

      currentKeyIndex = state.keyIndex + 1;
      currentNode = state.node;
      currentPrefix = currentPrefix.slice(0, -1);
    }
  }
};

export default traverse;
