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
import { Descendant, Node, TraverseCallback, TraverseOptions } from './types';

/**
 * A class representing the {@link https://en.wikipedia.org/wiki/Trie | Trie data structure}.
 */
class Trie {
  /**
   * Creates a new {@link Trie} by deserializing given string.
   *
   * The inverse of {@link Trie.serialize | asd}.
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
   * Tells you whether there are any words with given prefix in the {@link Trie}.
   *
   * See: https://en.wikipedia.org/wiki/String_operations#Prefixes
   *
   * @param prefix - Prefix to be found.
   * @returns true if there are any words with given prefix in the {@link Trie}, false otherwise.
   */
  public hasPrefix(prefix: string): boolean {
    return hasPrefix(this.root, prefix);
  }

  /**
   * Removes given word from the {@link Trie} if it exists.
   *
   * @param word - Word to be removed.
   * @returns true if the word was removed, false otherwise.
   */
  public remove(word: string): boolean {
    return remove(this.root, word);
  }

  /**
   * Converts the {@link Trie} into a string.
   *
   * The inverse of {@link Trie.deserialize | asd}.
   *
   * It serializes {@link https://sjp.pl/slownik/growy/ | 42.8 MB Polish dictionary} down to 18.7 MB (-56%).
   *
   * It serializes {@link https://www.wordgamedictionary.com/twl06/download/twl06.txt | 1.9 MB English (US) dictionary} down to 1.4 MB (-30%).
   *
   * It serializes {@link https://www.wordgamedictionary.com/sowpods/download/sowpods.txt | 3 MB English (GB) dictionary} down to 2 MB (-32%).
   *
   * @returns String with serialized data.
   */
  public serialize(): string {
    return serialize(this.root);
  }

  /**
   * Finds all {@link Descendant | descendants} of the {@link Trie | Trie's} root and returns them as an array.
   *
   * @param options - See {@link TraverseOptions}.
   * @returns An array of {@link Descendant | descendants}.
   */
  public toArray(options?: TraverseOptions): Descendant[] {
    return toArray(this.root, options);
  }

  /**
   * Visits every descendant {@link Node} of the {@link Trie} and calls a callback.
   *
   * @param callback - Callback that will be called for each visited {@link Node}. Return true from callback to stop traversing.
   * @param options - See {@link TraverseOptions}.
   */
  public traverse(callback: TraverseCallback, options?: TraverseOptions): void {
    return traverse(this.root, callback, options);
  }
}

export default Trie;
