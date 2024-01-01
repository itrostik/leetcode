function tour(friends, fTowns, distTable) {
  let totalDistance = 0
  const objectTowns = {}

  for (let i = 0; i < friends.length; i++) {
    let currentDistance = null
    let currentTown = null

    fTowns.forEach(town => {
      if (town.includes(friends[i])) {
        currentTown = town[1]
      }
    })

    for (let j = 0; j < distTable.length; j++) {
      if (distTable[j] === currentTown && distTable[j + 1]) {
        currentDistance = distTable[j + 1]
        break
      }
    }
    if (currentDistance && currentTown) objectTowns[currentTown] = currentDistance
  }

  const distTowns = distTable.filter(town => objectTowns[town] !== undefined)

  totalDistance += objectTowns[distTowns[0]]
  totalDistance += objectTowns[distTowns[distTowns.length - 1]]

  for (let i = 1; i < distTowns.length; i++) {
    const distanceBetweenTowns = Math.sqrt(Math.pow(objectTowns[distTowns[i]], 2) - Math.pow(objectTowns[distTowns[i - 1]], 2))
    totalDistance += distanceBetweenTowns

  }

  return Math.floor(totalDistance)
}

tour(['B1', 'B2'], [['B1', 'Y1'],
  ['B2', 'Y2'],
  ['B3', 'Y3'],
  ['B4', 'Y4'],
  ['B5', 'Y5']], [
  'Y1', 50, 'Y2',
  70, 'Y3', 90,
  'Y4', 110, 'Y5',
  150
])