import Trie from './Trie';

import { Node } from './types';

describe('Trie', () => {
  const words = ['ab', 'abcd', 'abce', 'ace'];
  const prefixes = ['a', 'ab', 'abc', 'ac', ...words];
  const otherWords = ['b', 'bc', 'ce', 'bcd', 'bce'];
  const otherPrefixes = ['b', 'bc', 'ce', 'bcd', 'bce'];
  const serializedTrie = '(a(bb(c(de))c(e)))';
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
    const trie = Trie.fromArray(words);

    words.forEach((word) => {
      expect(trie.has(word)).toBe(true);
    });
  });

  it('Has all the prefixes', () => {
    const trie = Trie.fromArray(words);

    prefixes.forEach((prefix) => {
      expect(trie.hasPrefix(prefix)).toBe(true);
    });
  });

  it('Does not have other words', () => {
    const trie = Trie.fromArray(words);

    otherWords.forEach((word) => {
      expect(trie.has(word)).toBe(false);
    });
  });

  it('Does not have other prefixes', () => {
    const trie = Trie.fromArray(words);

    otherPrefixes.forEach((word) => {
      expect(trie.hasPrefix(word)).toBe(false);
    });
  });

  it('Does nothing when trying to remove an empty string', () => {
    const trie = Trie.fromArray(words);

    trie.remove('');

    words.forEach((word) => {
      expect(trie.has(word)).toBe(true);
    });
  });

  it('Does nothing when trying to remove an inexisting word', () => {
    const trie = Trie.fromArray(words);

    trie.remove('xyz');
    trie.remove('abc');

    words.forEach((word) => {
      expect(trie.has(word)).toBe(true);
    });
  });

  it('Removes words', () => {
    const trie = Trie.fromArray(words);

    for (let i = 0; i < words.length; ++i) {
      const word = words[i];

      expect(trie.has(word)).toBe(true);
      trie.remove(word);
      expect(trie.has(word)).toBe(false);

      words.slice(i + 1).forEach((remainingWord) => {
        expect(trie.has(remainingWord)).toBe(true);
      });
    }

    expect(Object.keys(trie.root).length).toBe(0);
  });

  it('Properly converts to JSON', () => {
    expect(Trie.fromArray(words).root).toEqual(trieJson);
  });

  it('Serializes', () => {
    expect(Trie.fromArray(words).serialize()).toEqual(serializedTrie);
  });

  it('Deserializes', () => {
    expect(Trie.deserialize(serializedTrie).root).toEqual(trieJson);
  });

  it('Catches deserialization errors', () => {
    expect(() => Trie.deserialize('())')).toThrow();
    expect(() => Trie.deserialize('(()')).toThrow();
  });

  it('Serializes and deserializes empty tree', () => {
    const trie = new Trie();
    expect(Trie.deserialize(trie.serialize())).toEqual(trie);
  });

  it('Properly initializes from JSON', () => {
    expect(new Trie(trieJson).root).toEqual(trieJson);
  });
});
