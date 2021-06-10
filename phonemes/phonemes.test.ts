import { getPhonemes } from "./phonemes.ts"
import { assertEquals } from "https://deno.land/std/testing/asserts.ts"


Deno.test("perro", () => {
    const phonemes = getPhonemes(["p", "e", "rr", "o"])
    assertEquals(phonemes, ["p", "e", "r", "o"]);
});