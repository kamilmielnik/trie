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

  public add(word: string): void {
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

  public find(prefix: string): Node | null {
    let node = this.root;

    for (let index = 0; index < prefix.length; ++index) {
      const character = prefix[index];

      if (!node[character]) {
        return null;
      }

      node = node[character] as Node;
    }

    return node;
  }

  public has(word: string): boolean {
    const node = this.find(word);
    return Boolean(node && node.wordEnd);
  }

  public hasPrefix(prefix: string): boolean {
    const node = this.find(prefix);
    return node ? Object.keys(node).length > 0 : false;
  }

  public remove(word: string): boolean {
    return this.removeSuffix(word, this.root);
  }

  public serialize(): string {
    return serialize(this.root);
  }

  public toJson(): Node {
    return this.root;
  }

  private removeSuffix(suffix: string, startNode: Node): boolean {
    if (suffix.length === 0) {
      return false;
    }

    const letter = suffix[0];
    const node = startNode[letter] as Node | undefined;

    if (!node) {
      return false;
    }

    if (suffix.length === 1) {
      if (!node.wordEnd) {
        return false;
      }

      if (Object.keys(node).length === 1) {
        delete startNode[letter];
      } else {
        delete node.wordEnd;
      }

      return true;
    }

    const removed = this.removeSuffix(suffix.substring(1), node);

    if (!removed) {
      return false;
    }

    if (Object.keys(node).length === 0) {
      delete startNode[letter];
    }

    return true;
  }
}

export default Trie;
