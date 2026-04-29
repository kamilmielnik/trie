import type { Node } from '../types.ts';

import { remove } from './remove.ts';

describe('remove', () => {
  it('Removes empty string', () => {
    const node: Node = {
      a: { wordEnd: true },
      wordEnd: true
    };

    remove(node, '');

    expect(node).toEqual({
      a: { wordEnd: true }
    });
  });
});
