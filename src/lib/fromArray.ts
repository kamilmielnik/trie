import { Node } from '../types';

import add from './add';

const fromArray = (words: string[]): Node => {
  const root: Node = {};

  words.forEach((word) => add(root, word));

  return root;
};

export default fromArray;
