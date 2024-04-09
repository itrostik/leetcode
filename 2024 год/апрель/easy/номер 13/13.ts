function romanToInt(s: string): number {
  const map = new Map();
  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "I") {
      if (s[i + 1] === "X" || s[i + 1] === "V") {
        result += map.get(s[i + 1]) - 1;
        i++;
      } else {
        result += map.get(s[i]);
      }
    } else if (s[i] === "X") {
      if (s[i + 1] === "L" || s[i + 1] === "C") {
        result += map.get(s[i + 1]) - 10;
        i++;
      } else {
        result += map.get(s[i]);
      }
    } else if (s[i] === "C") {
      if (s[i + 1] === "D" || s[i + 1] === "M") {
        result += map.get(s[i + 1]) - 100;
        i++;
      } else {
        result += map.get(s[i]);
      }
    } else {
      result += map.get(s[i]);
    }
  }
  return result;
}
