import { find, remove } from './lib';
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
    return find(this.root, prefix);
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
    return remove(this.root, word);
  }

  public serialize(): string {
    return serialize(this.root);
  }

  public toJson(): Node {
    return this.root;
  }
}

export default Trie;
