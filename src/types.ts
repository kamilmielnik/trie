export interface Node extends Record<string, Node | true | undefined> {
  wordEnd?: true;
}
