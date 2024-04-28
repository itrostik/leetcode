function findMatrix(nums: number[]): number[][] {
  const map = {}

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) map[nums[i]] = map[nums[i]] + 1
    else map[nums[i]] = 1
  }

  const result = []

  while (Object.keys(map).length > 0) {
    const cur = []
    for (let key of Object.keys(map)) {
      const value = map[key]
      if (value > 0) {
        cur.push(key)
        map[key] = value - 1
      }
      if (value === 0) delete map[key]
    }
    if (cur.length > 0) result.push(cur)
  }

  return result

};