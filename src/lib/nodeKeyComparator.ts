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
