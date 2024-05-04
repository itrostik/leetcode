function numRescueBoats(people: number[], limit: number): number {
  let sorted = people.sort((a, b) => a - b)
  let count = 0

  while (sorted.length > 0) {
    count++
    const last = sorted.pop()
    if (sorted[0] + last <= limit) {
      sorted.shift()
    }
  }

  return count
}