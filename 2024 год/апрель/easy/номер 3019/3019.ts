function countKeyChanges(s: string): number {
  let count = 0;
  let prev = s[0];
  for (let i = 1; i < s.length; i++) {
    if (s[i].toLowerCase() !== prev.toLowerCase()) count++;
    prev = s[i];
  }
  return count;
}
