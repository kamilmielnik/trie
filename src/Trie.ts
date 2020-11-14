import {
  add,
  deserialize,
  find,
  fromArray,
  has,
  hasPrefix,
  remove,
  serialize,
  toArray,
  traverse
} from './lib';
import { Node, TraverseCallback, TraverseCallbackData, TraverseOptions } from './types';

/**
 * A class representing the Trie data structure (https://en.wikipedia.org/wiki/Trie).
 */
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
    return new Trie(fromArray(words));
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
    return add(this.root, word);
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
    return has(this.root, word);
  }

  /**
   * Returns true if there are any words with given prefix in the Trie.
   * See: https://en.wikipedia.org/wiki/String_operations#Prefixes
   */
  public hasPrefix(prefix: string): boolean {
    return hasPrefix(this.root, prefix);
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

  /**
   * Returns Node instance and prefix it represents of all Nodes (except root) in the Trie.
   * Pass "sort: true" to get results in alphabetical order.
   * Pass "wordsOnly: true" to only get nodes representing complete words.
   */
  public toArray(options?: TraverseOptions): TraverseCallbackData[] {
    return toArray(this.root, '', options);
  }

  /**
   * Visits every descendant Node in the Trie and calls a callback for each one.
   * Return true from callback to stop traversing.
   * Pass "sort: true" as an option to visit Nodes in alphabetical order.
   */
  public traverse(callback: TraverseCallback, options?: TraverseOptions): void {
    return traverse(this.root, '', callback, options);
  }
}

export default Trie;
