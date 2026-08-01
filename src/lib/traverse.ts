import type { Node, TraverseCallback, TraverseOptions } from '../types.ts';

import { nodeKeyComparator } from './nodeKeyComparator.ts';

type TraverseState = {
  keyIndex: number;
  keys: string[];
  node: Node;
  prefix: string;
};

/**
 * Visits every descendant {@link Node} of given {@link Node} and calls a callback.
 *
 * @param node - {@link Node} to look for descendant {@link Node | Nodes} in.
 * @param callback - Callback that will be called for each visited {@link Node}. Return true from callback to stop traversing.
 * @param options - See {@link TraverseOptions}.
 */
export const traverse = (
  node: Node,
  callback: TraverseCallback,
  options: TraverseOptions = {}
): void => {
  const stack: TraverseState[] = [];
  let currentKeys = getKeys(node, options.sort);
  let currentKeyIndex = 0;
  let currentNode = node;
  let currentPrefix = options.prefix || '';

  while (true) {
    if (currentKeyIndex >= currentKeys.length) {
      const state = stack.pop();

      if (!state) {
        return;
      }

      currentKeyIndex = state.keyIndex + 1;
      currentKeys = state.keys;
      currentNode = state.node;
      currentPrefix = state.prefix;
      continue;
    }

    const key = currentKeys[currentKeyIndex];

    if (key === 'wordEnd') {
      ++currentKeyIndex;
      continue;
    }

    const nextNode = currentNode[key] as Node;
    const nextPrefix = currentPrefix + key;

    if (!options.wordsOnly || nextNode.wordEnd) {
      const shouldStop = callback({ node: nextNode, prefix: nextPrefix });

      if (shouldStop) {
        return;
      }
    }

    stack.push({
      keyIndex: currentKeyIndex,
      keys: currentKeys,
      node: currentNode,
      prefix: currentPrefix
    });

    currentKeys = getKeys(nextNode, options.sort);
    currentKeyIndex = 0;
    currentNode = nextNode;
    currentPrefix = nextPrefix;
  }
};

const getKeys = (node: Node, sort: boolean | undefined): string[] => {
  const keys = Object.keys(node);
  return sort ? keys.sort(nodeKeyComparator) : keys;
};
