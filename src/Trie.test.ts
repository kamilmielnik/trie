import Trie from './Trie';

import { Node } from './types';

describe('Trie', () => {
  const words = ['ab', 'abcd', 'abce', 'ace'];
  const prefixes = ['a', 'ab', 'abc', 'ac', ...words];
  const otherWords = ['b', 'bc', 'ce', 'bcd', 'bce'];
  const otherPrefixes = ['b', 'bc', 'ce', 'bcd', 'bce'];
  const trie = Trie.fromArray(words);
  const serializedTrie = '(a(b,b(c(d,e)),c(e)))';
  const trieJson: Node = {
    a: {
      b: {
        wordEnd: true,
        c: {
          d: {
            wordEnd: true
          },
          e: {
            wordEnd: true
          }
        }
      },
      c: {
        e: {
          wordEnd: true
        }
      }
    }
  };

  it('Has all the words', () => {
    words.forEach((word) => expect(trie.has(word)).toBe(true));
  });

  it('Has all the prefixes', () => {
    prefixes.forEach((prefix) => expect(trie.hasPrefix(prefix)).toBe(true));
  });

  it('Does not have other words', () => {
    otherWords.forEach((word) => expect(trie.has(word)).toBe(false));
  });

  it('Does not have other prefixes', () => {
    otherPrefixes.forEach((word) => expect(trie.hasPrefix(word)).toBe(false));
  });

  it('Properly converts to JSON', () => {
    expect(trie.toJson()).toEqual(trieJson);
  });

  it('Properly serializes', () => {
    expect(trie.serialize()).toEqual(serializedTrie);
  });

  it('Properly deserializes', () => {
    expect(Trie.deserialize(serializedTrie).toJson()).toEqual(trieJson);
  });

  it('Properly initializes from JSON', () => {
    expect(new Trie(trieJson).toJson()).toEqual(trieJson);
  });
});
