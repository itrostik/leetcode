function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
  if (edges.length === 0 && source === destination) return true
  if (edges.length === 0 && source !== destination) return false
  const graph = {}
  for (let i = 0; i < edges.length; i++) {
    if (graph[edges[i][0]]) {
      graph[edges[i][0]] = [...graph[edges[i][0]], edges[i][1]]
    } else {
      graph[edges[i][0]] = [edges[i][1]]
    }
    if (graph[edges[i][1]]) {
      graph[edges[i][1]] = [...graph[edges[i][1]], edges[i][0]]
    } else {
      graph[edges[i][1]] = [edges[i][0]]
    }
  }
  let stack = [source]
  const proceeded = [source]
  while (stack.length > 0) {
    const node = stack.shift()
    const neighbors = graph[node]
    for (let neighbor of neighbors) {
      if (neighbor !== destination && !proceeded.includes(neighbor)) {
        stack.push(neighbor)
        proceeded.push(neighbor)
      }
      else if (neighbor === destination) return true
    }
  }
  return false
};