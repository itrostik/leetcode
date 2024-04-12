function minimumPushes(word: string): number {
  let length = word.length;
  let i = 1;
  let result = 0;
  while (length > 8) {
    length -= 8;
    result += i * 8;
    i++;
  }

  result += i * length;

  return result;
}
