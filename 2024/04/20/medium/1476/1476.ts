class SubrectangleQueries {

  rectangle = []

  constructor(rectangle: number[][]) {
    let matrix = []
    for (let i = 0; i < rectangle.length; i++) {
      let row = []
      for (let j = 0; j < rectangle[i].length; j++) {
        row.push(rectangle[i][j])
      }
      matrix.push(row)
    }
    this.rectangle = matrix
  }

  updateSubrectangle(row1: number, col1: number, row2: number, col2: number, newValue: number): void {
    for (let i = row1; i <= row2; i++) {
      for (let j = col1; j <= col2; j++) {
        this.rectangle[i][j] = newValue
      }
    }
  }

  getValue(row: number, col: number): number {
    return this.rectangle[row][col]
  }
}