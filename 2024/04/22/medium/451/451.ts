function frequencySort(s: string): string {
  const map = new Map()

  const symbols = []

  let str = ""
  for (let i = 0; i < s.length; i++) {
    symbols.push([])
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1)
    } else map.set(s[i], 1)
  }


  for (let key of map.keys()) {
    const value = map.get(key)
    const cur = symbols[value - 1].length
    console.log(value, cur)
    symbols[value - 1][cur] = key
  }


  for (let i = 0; i < symbols.length; i++) {
    for (let j = 0; j < symbols[i].length; j++) {
      str += `${symbols[i][j].repeat(i + 1)}`
    }
  }

  return str.split("").reverse().join("")
};