function findLatestTime(s: string): string {
  let result = ""
  const timeSplit = s.split(":")
  const first = timeSplit[0]
  const second = timeSplit[1]

  if (first[0] === '?') {
    if (first[1] === '?') result += '1'
    else if (parseInt(first[1]) > 1) {
      result += '0'
    } else {
      result += '1'
    }

  } else result += first[0]

  if (first[1] === '?') {
    if (result[0] === '0') result += '9'
    else result += '1'
  } else result += first[1]

  result += ":"

  if (second[0] === '?') result += '5'
  else result += second[0]

  if (second[1] === '?') result += '9'
  else result += second[1]

  return result
};