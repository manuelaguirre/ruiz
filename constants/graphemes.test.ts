import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { getGraphemes } from "./getGraphemes.ts"


Deno.test("perro", () => {
    const transcription = getGraphemes("perro")
    assertEquals(transcription, ["p", "e", "rr", "o"]);
});


Deno.test({
    name: "chillar",
    fn: () => {
        const transcription = getGraphemes("chillar")
        assertEquals(transcription, ["ch", "i", "ll", "a", "r"]);
    },
});

Deno.test({
    name: "antofagasta",
    fn: () => {
        const transcription = getGraphemes("antofagasta")
        assertEquals(transcription, ["a", "n", "t", "o", "f", "a", "g", "a", "s", "t", "a"]);
    },
});
