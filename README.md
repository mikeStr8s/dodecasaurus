# Deno dice utility library
Dice utility that makes generating random dice values simple and convenient.

Work in progress

## Usage

```ts
import { dice } from './mod.ts';

// Roll a d4
const r1 = dice.d4.roll();

// Roll a d6
const r2 = dice.d6.roll();
```

Available Shorthand

```ts
import { d12 } from './mod.ts';

const r1 = d12.roll();  // Roll a d12
```

Custom Dice Creation

```ts
import Dice from './mod.ts'

const d = new Dice(14);  // Create a 14 sided die
const r1 = d.roll();  // Roll a d14
```

NOTE: Custom dice creation is limited to 32bit integers

Current default dice configurations: d4, d6, d8, d10, d12, d20

TODO:

- More dice utilities.
- String parser
- Dice arithmatic

I am sure that there are more things that I can do to make it better, they will be added as I think of them.