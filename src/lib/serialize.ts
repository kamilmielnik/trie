import { CLOSE_PARENS, OPEN_PARENS, SEPARATOR } from '../constants';
import { Node } from '../types';

/**
 * Converts given Node into a string.
 */
const serialize = (node: Node, character: string = ''): string => {
  const letters = Object.keys(node).filter((key) => key.length === 1);
  const hasPrefix = letters.length > 0;
  let serialized = '';

  if (node.wordEnd) {
    serialized += character;
  }

  if (node.wordEnd && hasPrefix) {
    serialized += SEPARATOR;
  }

  if (hasPrefix) {
    serialized += character;
    serialized += OPEN_PARENS;
    serialized += letters.map((letter) => serialize(node[letter] as Node, letter)).join(SEPARATOR);
    serialized += CLOSE_PARENS;
  }

  return serialized;
};

export default serialize;
