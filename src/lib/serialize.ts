import { CLOSE_PARENS, OPEN_PARENS } from '../constants.ts';
import type { Node } from '../types.ts';

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
export const serialize = (node: Node): string => {
  const parts: string[] = [];
  serializeNode(node, '', parts);
  return parts.join('');
};

const serializeNode = (node: Node, character: string, parts: string[]): void => {
  const keys = Object.keys(node);

  if (node.wordEnd) {
    parts.push(character);
  }

  if (hasAnyLetter(keys)) {
    parts.push(character, OPEN_PARENS);

    for (let index = 0; index < keys.length; ++index) {
      const key = keys[index];

      if (key.length === 1) {
        serializeNode(node[key] as Node, key, parts);
      }
    }

    parts.push(CLOSE_PARENS);
  }
};

const hasAnyLetter = (keys: string[]): boolean => {
  for (let index = 0; index < keys.length; ++index) {
    if (keys[index].length === 1) {
      return true;
    }
  }

  return false;
};
