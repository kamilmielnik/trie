import { add, deserialize, find, remove, serialize } from './lib';
import { Node } from './types';

class Trie {
  /**
   * Creates a new Trie by deserializing given string.
   * The inverse of Trie.prototype.serialize.
   */
  static deserialize(serialized: string): Trie {
    return new Trie(deserialize(serialized));
  }

  /**
   * Creates a new Trie based on array of words.
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
   * Creates a new Trie with optionally given root Node.
   */
  constructor(root: Node = {}) {
    this.root = root;
  }

  /**
   * Inserts given word into the Trie.
   * Returns Node representing last character in the word.
   */
  public add(word: string): Node {
    const node = add(this.root, word);
    node.wordEnd = true;
    return node;
  }

  /**
   * Returns Node representing a given prefix.
   * Returns undefined if there is no such Node.
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
   * Converts Trie into a string.
   * The inverse of Trie.deserialize.
   */
  public serialize(): string {
    return serialize(this.root);
  }
}

export default Trie;
