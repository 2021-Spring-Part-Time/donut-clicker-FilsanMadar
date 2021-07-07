class DonutMaker {
  constructor(numDonuts, numAutoClickers, costAutoClicker) {
    this.numDonuts = numDonuts;
    this.numAutoClickers = numAutoClickers;
    this.costAutoClicker = costAutoClicker;
  }

  getNumDonut() {
    return this.numDonuts;
  }

  addDonut() {
    this.numDonuts++;
  }

  getNumAutoClicker() {
    return this.numAutoClickers;
  }

  addAutoClicker() {
    if (this.numDonuts >= 100) {
      this.numAutoClickers++;
      this.numDonuts -= 100;
      this.costAutoClicker = Math.round(this.costAutoClicker * 0.1);
    }
  }

  costAutoClicker() {
    while (this.numAutnClickers > 0) {
      if (this.numDonuts >= this.costAutoClicker) {
        this.numDonuts - this.costAutoClicker;
        this.costAutoClicker += this.costAutoClicker * 0.1;
        this.numAutoClickers++;
      }
    }
  }

  activateAutoClicker() {
    if (this.numAutoClickers > 0) {
      this.numDonuts += this.numAutoClickers * 1;
    }
  }
}
export default DonutMaker;
