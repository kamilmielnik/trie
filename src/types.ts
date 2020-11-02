export interface Node extends Record<string, Node> {
  wordEnd?: boolean;
}
