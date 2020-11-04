import { serialize, deserialize } from './serializer';
import { Node } from './types';

class Trie {
  static deserialize(serialized: string): Trie {
    const trie = new Trie();
    trie.root = deserialize(serialized);
    return trie;
  }

  static fromArray(words: string[]): Trie {
    const root = words.reduce<Node>((trie, word) => {
      let node: Node = trie;

      for (let index = 0; index < word.length; ++index) {
        const character = word[index];

        if (!node[character]) {
          node[character] = {};
        }

        node = node[character] as Node;
      }

      node.wordEnd = true;

      return trie;
    }, {});

    return new Trie(root);
  }

  private root: Node;

  constructor(root: Node = {}) {
    this.root = root;
  }

  has(word: string) {
    let node = this.root;

    for (let index = 0; index < word.length; ++index) {
      const character = word[index];

      if (!node[character]) {
        return false;
      }

      node = node[character] as Node;
    }

    return node.wordEnd;
  }

  hasMore(word: string): boolean {
    let node = this.root;

    for (let index = 0; index < word.length; ++index) {
      const character = word[index];

      if (!node[character]) {
        return false;
      }

      node = node[character] as Node;
    }

    return Object.keys(node).length > 0;
  }

  serialize(): string {
    return serialize(this.root);
  }

  toJson(): Node {
    return this.root;
  }
}

export default Trie;
