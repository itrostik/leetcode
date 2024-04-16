function countPrefixSuffixPairs(words: string[]): number {
  let count = 0;

  function isPrefixAndSuffix(str1: string, str2: string) {
    if (str1.length > str2.length) return false;
    const prefix = str2.slice(0, str1.length);
    const suffix = str2.slice(str2.length - str1.length, str2.length);
    return prefix === suffix && str1 === prefix;
  }

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (isPrefixAndSuffix(words[i], words[j])) count++;
    }
  }

  return count;
}
