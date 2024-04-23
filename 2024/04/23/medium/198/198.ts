function rob(nums: number[]): number {
  const robbers = []
  let max = 0

  for (let i = 0; i < nums.length; i++) {
    if (!robbers[i - 1] && !robbers[i - 2]) robbers[i] = nums[i]
    else if (robbers[i - 1] && !robbers[i - 2]) {
      robbers[i] = Math.max(robbers[i - 1], nums[i])
    } else if (robbers[i - 1] && robbers[i - 2]) {
      if (robbers[i - 3]) robbers[i] = nums[i] + Math.max(robbers[i - 2], robbers[i - 3])
      else robbers[i] = nums[i] + robbers[i - 2]
    }
  }


  for (let i = 0; i < robbers.length; i++) {
    if (robbers[i] > max) max = robbers[i]
  }

  return max
};