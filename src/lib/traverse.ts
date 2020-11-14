import { Node, TraverseCallback, TraverseOptions } from '../types';

import nodeKeyComparator from './nodeKeyComparator';

type TraverseState = {
  keyIndex: number;
  node: Node;
};

/**
 * Visits every descendant Node and calls a callback for each one.
 * Return true from callback to stop traversing.
 */
const traverse = (
  node: Node,
  prefix: string,
  callback: TraverseCallback,
  options: TraverseOptions = {}
): void => {
  const stack: TraverseState[] = [];
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

          if (!options.wordsOnly || currentNode.wordEnd) {
            const shouldStop = callback({ node: currentNode, prefix: currentPrefix });

            if (shouldStop) {
              return;
            }
          }
        }
      }
    }

    if (stack.length > 0) {
      const state = stack.pop() as TraverseState;

      currentKeyIndex = state.keyIndex + 1;
      currentNode = state.node;
      currentPrefix = currentPrefix.slice(0, -1);
    }
  }
};

export default traverse;
