export class Counter {
  count: number;

  constructor(count = 0) {
    this.count = count;
  }

  increment(amount = 1) {
    this.count += amount;
  }

  reset() {
    this.count = 0;
  }
}
