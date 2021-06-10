import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { getGraphemes } from "./graphemes.ts"


Deno.test("gets graphemes from perro", () => {
    const transcription = getGraphemes("perro")
    assertEquals(transcription, ["p", "e", "rr", "o"]);
});


Deno.test({
    name: "gets graphemes from chicharra",
    fn: () => {
        const transcription = getGraphemes("la chicharra")
        assertEquals(transcription, ["l", "a", " ", "ch", "i", "ch", "a", "rr", "a"]);
    },
});

Deno.test({
    name: "gets graphemes from antofagasta",
    fn: () => {
        const transcription = getGraphemes("antofagasta")
        assertEquals(transcription, ["a", "n", "t", "o", "f", "a", "g", "a", "s", "t", "a"]);
    },
});
