import { Node } from '../types';

import nodeKeyComparator from './nodeKeyComparator';

type Callback = (parameters: { node: Node; prefix: string }) => boolean | void;

interface State {
  keyIndex: number;
  node: Node;
}

interface Options {
  /**
   * When set to true, Nodes will be visited in alphabetical order.
   */
  sort?: boolean;
}

/**
 * Visits every descendant Node and calls a callback for each one.
 * Return true from callback to stop traversing.
 */
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
        const sortedKeys = options.sort ? keys.sort(nodeKeyComparator) : keys;
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
