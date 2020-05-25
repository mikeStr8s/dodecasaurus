import { assertEquals, assert } from "https://deno.land/std@0.53.0/testing/asserts.ts";

import { dice } from "./mod.ts";

const tests = [
    { die: dice.d4, sides: 4 },
    { die: dice.d6, sides: 6 },
    { die: dice.d8, sides: 8 },
    { die: dice.d10, sides: 10 },
    { die: dice.d12, sides: 12 },
    { die: dice.d20, sides: 20 }
];

for (const k of tests) {
    Deno.test({
        name: `dice.d${k.sides}`,
        async fn(): Promise<void> {
            const d = k.die;
            const s = k.sides;
            assertEquals(d.sides, s, `Expected sides for dice d${s} was ${d.sides}, should have been ${s}`);
            for (let x = 0; x < 100; x++) {
                const r = d.roll();
                assert(0 < r && r < d.sides + 1, `Dice roll output invalid value: ${r}`);
            }
        }
    });
}