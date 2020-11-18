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
 * A class representing the {@link Trie} data structure (https://en.wikipedia.org/wiki/Trie).
 */
class Trie {
  /**
   * Creates a new {@link Trie} by deserializing given string.
   * The inverse of {@link serialize}.
   *
   * @param serialized - String with serialized data.
   * @returns {@link Trie} representing deserialized data.
   */
  static deserialize(serialized: string): Trie {
    return new Trie(deserialize(serialized));
  }

  /**
   * Creates a new {@link Trie} based on array of words.
   *
   * @params words - array of words to put in the {@link Trie}.
   * @returns New {@link Trie} containing all given words.
   */
  static fromArray(words: string[]): Trie {
    return new Trie(fromArray(words));
  }

  /**
   * Represents the root {@link Node} of the {@link Trie}.
   * It's not a copy. Mutate at your own risk.
   */
  public readonly root: Node;

  /**
   * Creates a new {@link Trie} with optionally given root {@link Node}.
   *
   * @param root - Root {@link Node} of the {@link Trie} to be created.
   */
  constructor(root: Node = {}) {
    this.root = root;
  }

  /**
   * Inserts given word into the {@link Trie}.
   *
   * @param word - Word to be inserted into the {@link Trie}.
   * @returns {@link Node} representing the end of the added word.
   */
  public add(word: string): Node {
    return add(this.root, word);
  }

  /**
   * Finds {@link Node} representing given prefix in the {@link Trie}.
   *
   * @param prefix - Prefix to be found.
   * @returns {@link Node} representing a given prefix, undefined if there is no such node.
   */
  public find(prefix: string): Node | undefined {
    return find(this.root, prefix);
  }

  /**
   * Tells you whether given word is in the {@link Trie}.
   *
   * @param word - Word to be found.
   * @returns true if given word is in the {@link Trie}, false otherwise.
   */
  public has(word: string): boolean {
    return has(this.root, word);
  }

  /**
   * Returns true if there are any words with given prefix in the {@link Trie}.
   * See: https://en.wikipedia.org/wiki/String_operations#Prefixes
   */
  public hasPrefix(prefix: string): boolean {
    return hasPrefix(this.root, prefix);
  }

  /**
   * Removes word from the {@link Trie} if it exists.
   * Returns true if word was removed.
   */
  public remove(word: string): boolean {
    return remove(this.root, word);
  }

  /**
   * Converts {@link Trie} into a string.
   * The inverse of {@link deserialize}.
   */
  public serialize(): string {
    return serialize(this.root);
  }

  /**
   * Returns {@link Node} instance and prefix it represents of all Nodes (except root) in the {@link Trie}.
   * Pass "sort: true" to get results in alphabetical order.
   * Pass "wordsOnly: true" to only get nodes representing complete words.
   */
  public toArray(options?: TraverseOptions): TraverseCallbackData[] {
    return toArray(this.root, '', options);
  }

  /**
   * Visits every descendant {@link Node} in the {@link Trie} and calls a callback for each one.
   * Return true from callback to stop traversing.
   * Pass "sort: true" as an option to visit nodes in alphabetical order.
   */
  public traverse(callback: TraverseCallback, options?: TraverseOptions): void {
    return traverse(this.root, '', callback, options);
  }
}

export default Trie;
