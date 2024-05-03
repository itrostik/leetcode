function compareVersion(version1: string, version2: string): number {
  const revisions1 = version1.split('.')
  const revisions2 = version2.split('.')

  function getRevision(version: string) {
    if (!version) return 0
    if (version[0] === "0") return getRevision(version.slice(1, version.length))
    else return +version
  }

  let i = 0
  let maxLength = Math.max(revisions1.length, revisions2.length)
  while (i < maxLength) {
    if (getRevision(revisions1[i]) < getRevision(revisions2[i])) return -1
    else if (getRevision(revisions1[i]) > getRevision(revisions2[i])) return 1
    i++
  }

  return 0

};