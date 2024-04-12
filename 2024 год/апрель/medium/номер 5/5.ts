function longestPalindrome(s: string): string {
  if (s.length < 2) return s;

  let l = 0;
  let r = s.length - 1;
  let current = "";
  let result = s[0];

  function isPalindromic(s: string): boolean {
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
      if (s[l] !== s[r]) return false;
      l++;
      r--;
    }
    return true;
  }

  while (l !== s.length) {
    current = s.slice(l, r + 1);

    if (result.length > current.length || r <= l) {
      r = s.length - 1;
      l++;
      if (r - l < result.length) break;
      continue;
    }

    if (isPalindromic(current)) {
      if (result.length < current.length) result = current;
    }
    r--;
  }
  return result;
}
