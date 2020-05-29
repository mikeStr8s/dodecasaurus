const { getRandomValues } = crypto;

/**
 * Class of a Dice object
 */
export class Dice {
    /** Number of die faces */
    sides: number;

    constructor(val: number) {
        this.sides = val;
    }
    /**
     * "Roll" the dice object generating a random 32-bit number and running a
     * modululus operation to reduce the generated number to a number between the
     * possible outcomes of the die faces.
     * Example:
     *     const d = new Dice(4)
     *     const rollResult = d.roll()  // Generates the rolled value for a d4
     */
    roll(): number {
        return (getRandomValues(new Uint32Array(1))[0] % this.sides) + 1;
    }
}

export const parseDiceString = (diceStr: string): number => {
    let parsedString = '';
    const subsetStartDelim = /\(/;
    const subsetEndDelim = /\)/;
    const subsetStart = diceStr.search(subsetStartDelim);
    const subsetEnd = diceStr.search(subsetEndDelim);
    if (subsetStart !== -1 && subsetEnd != -1) {
        // console.log(diceStr.substring(subsetStart+1, subsetEnd));
        const subsetResult = parseDiceString(diceStr.substring(subsetStart+1, subsetEnd));
        const regexTerms = RegExp(/\+|\-|\*|\//);
        const term1 = regexTerms.test(diceStr[subsetStart-1]) ? '' : '*';
        const term2 = regexTerms.test(diceStr[subsetEnd+1]) ? '' : '*';
        parsedString = [diceStr.substring(0, subsetStart), term1, subsetResult, term2, diceStr.substring(subsetEnd+1)].join('');
        console.log(parsedString);
    }
    return 4;
};

/** Provided shorthand for a four sided dice */
export const d4 = new Dice(4);
/** Provided shorthand for a six sided dice */
export const d6 = new Dice(6);
/** Provided shorthand for a eight sided dice */
export const d8 = new Dice(8);
/** Provided shorthand for a ten sided dice */
export const d10 = new Dice(10);
/** Provided shorthand for a 12 sided dice */
export const d12 = new Dice(12);
/** Provided shorthand for a 20 sided dice */
export const d20 = new Dice(20);

/** Provided object container for all standard dice options */
export const dice = {
    d4,
    d6,
    d8,
    d10,
    d12,
    d20
};