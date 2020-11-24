import { CLOSE_PARENS, OPEN_PARENS } from '../constants';
import { Node } from '../types';

const serializeNode = (node: Node, character: string): string => {
  const letters = Object.keys(node).filter((key) => key.length === 1);
  const hasPrefix = letters.length > 0;
  let serialized = '';

  if (node.wordEnd) {
    serialized += character;
  }

  if (hasPrefix) {
    serialized += character;
    serialized += OPEN_PARENS;
    serialized += letters.map((letter) => serializeNode(node[letter] as Node, letter)).join('');
    serialized += CLOSE_PARENS;
  }

  return serialized;
};

/**
 * Converts given {@link Node} into a string.
 *
 * The inverse of {@link deserialize}.
 *
 * It serializes {@link https://sjp.pl/slownik/growy/ | 42.8 MB Polish dictionary} down to 18.7 MB (-56%).
 *
 * It serializes {@link https://www.wordgamedictionary.com/twl06/download/twl06.txt | 1.9 MB English (US) dictionary} down to 1.4 MB (-30%).
 *
 * It serializes {@link https://www.wordgamedictionary.com/sowpods/download/sowpods.txt | 3 MB English (GB) dictionary} down to 2 MB (-32%).
 *
 * @param node - {@link Node} to serialize.
 * @returns String with serialized data.
 */
const serialize = (node: Node): string => serializeNode(node, '');

export default serialize;
