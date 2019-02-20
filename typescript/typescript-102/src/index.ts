// population of africa: 1287269147
// const africaPop = 1_287_269_147;

class AmountInput {
  private static MAX_ALLOWED = 99_999_999;
  amount: number = 0;

  showToolTip() {
      //show tooltip
      console.log('show tooltip')
    setTimeout(() => {
      //hide tooltip
      console.log('hide tooltip')
    }, 2_500);
  }

  formatMillion() {
    return this.amount / 1_000_000 + "M";
  }
}