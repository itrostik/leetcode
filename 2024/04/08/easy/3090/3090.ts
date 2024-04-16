function maximumLengthSubstring(s: string): number {
  const map = new Map();
  let result = 0;
  let current = 0;
  let start = 0;
  let end = 0;
  while (end !== s.length) {
    if (s.length - start < result) break;
    if (map.get(s[end]) === 2) {
      if (current >= result) result = current;
      map.clear();
      current = 0;
      start++;
      end = start;
    } else {
      if (map.has(s[end])) {
        map.set(s[end], 2);
      } else {
        map.set(s[end], 1);
      }
      current++;
      end++;
    }
  }

  if (current > result) return current;
  return result;
}
