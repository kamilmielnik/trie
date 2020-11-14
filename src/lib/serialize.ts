import { CLOSE_PARENS, OPEN_PARENS } from '../constants';
import { Node } from '../types';

/**
 * Converts given Node into a string. The inverse of deserialize.
 * It serializes 41 MB Polish dictionary (https://sjp.pl/slownik/growy/) down to 12 MB (-71%).
 * It serializes 1.9 MB English (US) dictionary (https://www.wordgamedictionary.com/twl06/download/twl06.txt) down to 993 KB (-48%).
 * It serializes 2.9 MB English (GB) dictionary (https://www.wordgamedictionary.com/sowpods/download/sowpods.txt) down to 1.5 MB (-49%).
 */
const serialize = (node: Node, character: string = ''): string => {
  const letters = Object.keys(node).filter((key) => key.length === 1);
  const hasPrefix = letters.length > 0;
  let serialized = '';

  if (node.wordEnd) {
    serialized += character;
  }

  if (hasPrefix) {
    serialized += character;
    serialized += OPEN_PARENS;
    serialized += letters.map((letter) => serialize(node[letter] as Node, letter)).join('');
    serialized += CLOSE_PARENS;
  }

  return serialized;
};

export default serialize;
