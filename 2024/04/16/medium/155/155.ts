class MinStack {
  stack: number[];
  min = Infinity;

  constructor() {
    this.stack = []
  }

  push(val: number): void {
    if (this.min > val) this.min = val
    this.stack.push(val)
  }

  pop(): void {
    let last = this.stack.pop()
    if (last === this.min) {
      let cur = Infinity
      for (let i = 0; i < this.stack.length; i++) {
        if (this.stack[i] < cur) cur = this.stack[i]
      }
      this.min = cur
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    return this.min
  }
}