import { Node } from '../types';

type Callback = (parameters: { node: Node; prefix: string }) => boolean | void;

interface State {
  keyIndex: number;
  node: Node;
}

interface Options {
  sort?: boolean;
}

const keyComparator = (key1: string, key2: string): number => {
  if (key1 === 'wordEnd') {
    return -1;
  }

  if (key2 === 'wordEnd') {
    return 1;
  }

  return key1.localeCompare(key2);
};

const traverse = (node: Node, prefix: string, callback: Callback, options: Options = {}): void => {
  const stack: State[] = [];
  let currentKeyIndex = 0;
  let currentNode: Node | undefined = node;
  let currentPrefix = prefix;

  while (stack.length > 0 || currentNode) {
    while (currentNode) {
      const keys = Object.keys(currentNode);

      if (currentKeyIndex >= keys.length) {
        currentNode = undefined;
      } else {
        const sortedKeys = options.sort ? keys.sort(keyComparator) : keys;
        const key = sortedKeys[currentKeyIndex];

        if (key === 'wordEnd') {
          ++currentKeyIndex;
        } else {
          stack.push({ keyIndex: currentKeyIndex, node: currentNode });

          currentKeyIndex = 0;
          currentNode = currentNode[key] as Node;
          currentPrefix += key;

          const shouldStop = callback({ node: currentNode, prefix: currentPrefix });

          if (shouldStop) {
            return;
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
