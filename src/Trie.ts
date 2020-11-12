import { add, deserialize, find, remove, serialize } from './lib';
import { Node } from './types';

class Trie {
  /**
   * The inverse of Trie.prototype.serialize.
   * Creates a new Trie instance by deserializing given JSON.
   */
  static deserialize(json: string): Trie {
    return new Trie(deserialize(json));
  }

  /**
   * Creates a new Trie instance based on array of words.
   */
  static fromArray(words: string[]): Trie {
    const trie = new Trie();
    words.forEach((word) => trie.add(word));
    return trie;
  }

  /**
   * Readonly property. Represents the root Node of the Trie.
   * It's not a copy. Mutate at your own risk.
   */
  public readonly root: Node;

  /**
   * Creates a new Trie instance with optionally given root Node.
   */
  constructor(root: Node = {}) {
    this.root = root;
  }

  /**
   * Inserts given word into the Trie.
   * Returns Node representing last character in the suffix.
   */
  public add(word: string): Node {
    const node = add(this.root, word);
    node.wordEnd = true;
    return node;
  }

  /**
   * Returns Node representing a given prefix.
   * Returns undefined if there is no such node.
   */
  public find(prefix: string): Node | undefined {
    return find(this.root, prefix);
  }

  /**
   * Returns true if given word is in the Trie.
   */
  public has(word: string): boolean {
    const node = this.find(word);
    return Boolean(node && node.wordEnd);
  }

  /**
   * Returns true if there are any words with given prefix in the Trie.
   * See: https://en.wikipedia.org/wiki/String_operations#Prefixes
   */
  public hasPrefix(prefix: string): boolean {
    const node = this.find(prefix);
    return node ? Object.keys(node).length > 0 : false;
  }

  /**
   * Removes word from the Trie if it exists.
   * Returns true if word was removed.
   */
  public remove(word: string): boolean {
    return remove(this.root, word);
  }

  /**
   * The inverse of Trie.deserialize.
   * Returns JSON.
   * It serializes 41 MB Polish dictionary down to 15 MB (-63%).
   * It serializes 1.9 MB English (US) dictionary down to 1.2 MB (-37%).
   * It serializes 2.9 MB English (GB) dictionary down to 1.8 MB (-38%).
   */
  public serialize(): string {
    return serialize(this.root);
  }
}

export default Trie;
