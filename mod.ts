const { getRandomValues } = crypto;

class Dice {
    sides: number;

    constructor(val: number) {
        this.sides = val;
    }

    roll(): number {
        return (getRandomValues(new Uint32Array(1))[0] % this.sides) + 1;
    }
}

export const d4 = new Dice(4);
export const d6 = new Dice(6);
export const d8 = new Dice(8);
export const d10 = new Dice(10);
export const d12 = new Dice(12);
export const d20 = new Dice(20);

export const dice = {
    d4,
    d6,
    d8,
    d10,
    d12,
    d20
};

export default Dice;