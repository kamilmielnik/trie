import { deserialize, serialize } from './serializer';
import { Node } from './types';

class Trie {
  static deserialize(serialized: string): Trie {
    return new Trie(deserialize(serialized));
  }

  static fromArray(words: string[]): Trie {
    const trie = new Trie();
    words.forEach((word) => trie.add(word));
    return trie;
  }

  private root: Node;

  constructor(root: Node = {}) {
    this.root = root;
  }

  add(word: string): void {
    let node: Node = this.root;

    for (let index = 0; index < word.length; ++index) {
      const character = word[index];

      if (!node[character]) {
        node[character] = {};
      }

      node = node[character] as Node;
    }

    node.wordEnd = true;
  }

  has(word: string): boolean {
    let node = this.root;

    for (let index = 0; index < word.length; ++index) {
      const character = word[index];

      if (!node[character]) {
        return false;
      }

      node = node[character] as Node;
    }

    return Boolean(node.wordEnd);
  }

  hasPrefix(word: string): boolean {
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
