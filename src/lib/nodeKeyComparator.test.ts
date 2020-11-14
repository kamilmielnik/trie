import nodeKeyComparator from './nodeKeyComparator';

describe('Trie', () => {
  it('Has all the words', () => {
    expect(['a', 'wordEnd', 'z'].sort(nodeKeyComparator)).toEqual(['wordEnd', 'a', 'z']);
    expect(['a', 'z', 'wordEnd'].sort(nodeKeyComparator)).toEqual(['wordEnd', 'a', 'z']);
    expect(['z', 'wordEnd', 'a'].sort(nodeKeyComparator)).toEqual(['wordEnd', 'a', 'z']);
    expect(['z', 'a', 'wordEnd'].sort(nodeKeyComparator)).toEqual(['wordEnd', 'a', 'z']);
    expect(['wordEnd', 'z', 'a'].sort(nodeKeyComparator)).toEqual(['wordEnd', 'a', 'z']);
    expect(['wordEnd', 'a', 'z'].sort(nodeKeyComparator)).toEqual(['wordEnd', 'a', 'z']);
  });
});
