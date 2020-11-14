/**
 * Keys are a single characters (strings of length 1) or "wordEnd".
 * "wordEnd: true" indicates that keys of all parent nodes make a valid word when joined together.
 */
export interface Node extends Record<string, Node | true | undefined> {
  wordEnd?: true;
}

export type TraverseCallback = (data: TraverseCallbackData) => boolean | void;

export type TraverseCallbackData = {
  node: Node;
  prefix: string;
};

export type TraverseOptions = {
  /**
   * When set to true, Nodes will be visited in alphabetical order.
   */
  sort?: boolean;
  /**
   * When set to true, only Nodes representing complete words will be visited.
   */
  wordsOnly?: boolean;
};
