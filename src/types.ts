export type Callback = (data: CallbackData) => boolean | void;

export type CallbackData = {
  node: Node;
  prefix: string;
};

export interface Node extends Record<string, Node | true | undefined> {
  wordEnd?: true;
}
