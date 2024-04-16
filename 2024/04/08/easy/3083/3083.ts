function isSubstringPresent(s: string): boolean {
  const reverseString = s.split("").reverse().join("");
  if (s.length < 2) return false;
  if (reverseString === s) return true;
  for (let i = 0; i < s.length - 1; i++) {
    const segment1 = s[i] + s[i + 1];
    for (let j = 0; j < reverseString.length - 1; j++) {
      const segment2 = reverseString[j] + reverseString[j + 1];
      if (segment1 === segment2) {
        return true;
      }
    }
  }
  return false;
}
