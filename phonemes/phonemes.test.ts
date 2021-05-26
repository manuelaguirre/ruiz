import { getPhonemes } from "./phonemes.ts"
import { assertEquals } from "https://deno.land/std/testing/asserts.ts"

// Simple name and function, compact form, but not configurable
Deno.test("perro", () => {
    const phonemes = getPhonemes(["p", "e", "rr", "o"])
    assertEquals(phonemes, ["p", "e", "r", "o"]);
});