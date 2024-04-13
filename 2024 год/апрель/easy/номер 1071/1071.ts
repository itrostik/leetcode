function gcdOfStrings(str1: string, str2: string): string {
  let i = 0;
  let curStr = "";
  let result = "";
  let minLen = Math.min(str1.length, str2.length);

  function isSubStr(str: string, substr: string) {
    let cur = "";
    while (str.length > cur.length) {
      cur += substr;
    }
    return str === cur;
  }

  while (i < minLen) {
    if (str1[i] === str2[i]) curStr += str1[i];
    else break;
    i++;
  }
  i = curStr.length - 1;
  while (curStr.length > 0) {
    if (isSubStr(str1, curStr) && isSubStr(str2, curStr)) return curStr;
    else curStr = curStr.slice(0, i);
    i--;
  }
  return result;
}
