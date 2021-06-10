import { getPhonemes } from "./phonemes.ts"
import { assertEquals } from "https://deno.land/std/testing/asserts.ts"

<<<<<<< HEAD

Deno.test("perro", () => {
    const phonemes = getPhonemes(["p", "e", "rr", "o"])
    assertEquals(phonemes, ["p", "e", "r", "o"]);
});
=======
// Simple name and function, compact form, but not configurable
Deno.test({
    name: "perro",
    fn: () => {
        const phonemes = getPhonemes(["p", "e", "rr", "o"])
        assertEquals(phonemes, ["p", "e", "r", "o"]);
    }
});

Deno.test({
    name: "el viento norte",
    fn: () => {
        const phonemes = getPhonemes(["e", "l", " ", "v", "i", "e", "n", "t", "o", " ", "n", "o", "r", "t", "e"])
        assertEquals(phonemes, "el 'βjento 'noɾte"); // Need to decide stress representation
    }
});
>>>>>>> 1491cd4a17cc28a0b810178590f365519302f858
