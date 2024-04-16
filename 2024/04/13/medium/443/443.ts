function compress(chars: string[]): number {
  let i = 0;
  let j = 0;
  while (i < chars.length) {
    let char = chars[i];
    let count = 0;
    while (i < chars.length && chars[i] === char) {
      i++;
      count++;
    }

    chars[j++] = char;

    if (count > 1) {
      const countStr = count.toString();
      for (let digit of countStr) {
        chars[j++] = digit;
      }
    }
  }

  chars.length = j;

  return j;
}
