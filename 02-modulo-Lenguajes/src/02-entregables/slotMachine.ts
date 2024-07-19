class SlotMachine {
  private coins: number;

  constructor() {
    this.coins = 0;
  }

  private randomBoolean(): boolean {
    return Math.random() >= 0.5;
  }
  play() {
    const roulette: boolean[] = [this.randomBoolean(), this.randomBoolean(), this.randomBoolean()];
    const successGame: boolean = roulette.every(Boolean);

    this.coins += 1;

    if (successGame) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }
}

const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
