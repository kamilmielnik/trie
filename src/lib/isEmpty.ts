import type { Node } from '../types.ts';

export const isEmpty = (node: Node): boolean => {
  for (const _key in node) {
    return false;
  }

  return true;
};
