/**
 * Keys are a single characters (strings of length 1) or "wordEnd".
 * "wordEnd: true" indicates that keys of all parent nodes make a valid word when joined together.
 */
export interface Node extends Record<string, Node | true | undefined> {
  wordEnd?: true;
}

export type TraverseCallback = (descendant: Descendant) => boolean | void;

export type Descendant = {
  node: Node;
  prefix: string;
};

export type TraverseOptions = {
  /**
   * Set the prefix to be applied to all descendants.
   * It should be the prefix represented by the node at which traversing starts.
   * Defaults to empty string.
   */
  prefix?: string;

  /**
   * Set to true to visit nodes in alphabetical order. Defaults to false.
   */
  sort?: boolean;

  /**
   * Set to true to only visit nodes representing complete words. Defaults to false.
   */
  wordsOnly?: boolean;
};
