function findCenter(edges: number[][]): number {
  const map = new Map()
  for (let i = 0; i < edges.length; i++) {
    if (map.has(edges[i][0])) map.set(edges[i][0], map.get(edges[i][0]) + 1)
    else map.set(edges[i][0], 1)

    if (map.has(edges[i][1])) map.set(edges[i][1], map.get(edges[i][1]) + 1)
    else map.set(edges[i][1], 1)
  }

  let max = 0
  let cur = 0;
  for (let key of map.keys()) {
    if (map.get(key) > max) {
      max = map.get(key)
      cur = key
    }
  }

  return cur
};