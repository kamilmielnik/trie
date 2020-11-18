/**
 * Comparator that allows sorting {@link Node} keys alphabetically
 * with the exception of "wordEnd" which should always come first.
 *
 * @param key1 - First key to compare.
 * @param key2 - Second key to compare.
 * @returns -1 if key1 should precede key2, 0 if they're the same, 1 if key2 should precede key1.
 */
const nodeKeyComparator = (key1: string, key2: string): number => {
  if (key1 === 'wordEnd') {
    return -1;
  }

  if (key2 === 'wordEnd') {
    return 1;
  }

  return key1.localeCompare(key2);
};

export default nodeKeyComparator;
