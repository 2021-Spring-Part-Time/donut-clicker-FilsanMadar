class DonutMaker {
  constructor(
    numDonuts,
    numAutoClickers,
    costAutoClicker,
    numDonutMultiplier,
    costDonutMultiplier
  ) {
    this.numDonuts = numDonuts;
    this.numAutoClickers = numAutoClickers;
    this.costAutoClicker = costAutoClicker;
    this.numDonutMultiplier = numDonutMultiplier;
    this.costDonutMultiplier = costDonutMultiplier;
  }

  getNumDonut() {
    return this.numDonuts;
  }

  addDonut() {
    if (this.numDonutMultiplier >= 1)
      this.numDonuts += +Math.pow(1.2, this.numDonutMultiplier).toFixed(2);
    else this.numDonuts += 1;
  }

  getNumAutoClicker() {
    return this.numAutoClickers;
  }

  addDonutByAutoClicker() {
    this.numDonuts += this.numAutoClickers;
  }

  addAutoClicker() {
    if (this.numDonuts >= this.costAutoClicker) {
      if (this.numDonutMultiplier >= 1) {
        this.numAutoClickers += +Math.pow(1.2, this.numDonutMultiplier).toFixed(
          2
        );
      } else {
        this.numAutoClickers++;
      }
      this.numDonuts -= Math.round(this.costAutoClicker);
      this.costAutoClicker = Math.round(this.costAutoClicker);
      this.costAutoClicker *= 1.1;
    }
  }

  getNumDonutMultiplier() {
    return this.numDonutMultiplier;
  }

  addDonutMultiplier() {
    if (this.numDonuts >= this.costDonutMultiplier) {
      this.numDonuts -= Math.round(this.costDonutMultiplier);
      this.numDonutMultiplier += 1;
      this.costDonutMultiplier += this.costDonutMultiplier * 1.1;
    }
  }

  activateAutoClicker() {
    if (this.numAutoClickers > 0) {
      this.numDonuts += this.numAutoClickers * 1;
    }
  }
}
export default DonutMaker;
