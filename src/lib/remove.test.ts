import { Node } from '../types';

import remove from './remove';

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
