import nodeKeyComparator from './nodeKeyComparator';

describe('nodeKeyComparator', () => {
  it('Gives same result for all permutations when used for sorting', () => {
    const sortedNodeKeys = ['wordEnd', 'a', 'z'];

    expect(['a', 'wordEnd', 'z'].sort(nodeKeyComparator)).toEqual(sortedNodeKeys);
    expect(['a', 'z', 'wordEnd'].sort(nodeKeyComparator)).toEqual(sortedNodeKeys);
    expect(['z', 'wordEnd', 'a'].sort(nodeKeyComparator)).toEqual(sortedNodeKeys);
    expect(['z', 'a', 'wordEnd'].sort(nodeKeyComparator)).toEqual(sortedNodeKeys);
    expect(['wordEnd', 'z', 'a'].sort(nodeKeyComparator)).toEqual(sortedNodeKeys);
    expect(['wordEnd', 'a', 'z'].sort(nodeKeyComparator)).toEqual(sortedNodeKeys);
  });
});
