function findContentChildren(g: number[], s: number[]): number {

  const sortG = g.sort((a, b) => a - b)
  const sortS = s.sort((a, b) => a - b)

  const mapGreed = new Map();
  const mapCookie = new Map();

  let result = 0;

  for (let i = 0; i < sortG.length; i++) {
    if (mapGreed.has(g[i])) {
      mapGreed.set(g[i], mapGreed.get(g[i]) + 1)
    }
    else {
      mapGreed.set(g[i], 1)
    }
  }
  for (let i = 0; i < sortS.length; i++) {
    if (mapCookie.has(s[i])) {
      mapCookie.set(s[i], mapCookie.get(s[i]) + 1)
    }
    else {
      mapCookie.set(s[i], 1)
    }
  }
  for (let greed of mapGreed.keys()) {
    let min = Infinity
    for (let cookie of mapCookie.keys()) {
      if (cookie >= greed && cookie < min) {
        min = cookie;
      }
    }
    if (min !== Infinity) {
      const cookieCount = mapCookie.get(min)
      if (cookieCount > 0) {
        mapCookie.set(min, cookieCount - 1)
        result += 1
      }
    }
  }
  return result;
}
