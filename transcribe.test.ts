import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { transcribe } from "./transcribe.ts"


Deno.test("transcribe perro", () => {
    const transcription = transcribe("perro")
    assertEquals(transcription, "/'\u0070\u0065\u0072\u006F/");
});


Deno.test({
    name: "transcribe el gato",
    fn: () => {
        const transcription = transcribe("el gato")
        assertEquals(transcription, "TEST CASE NOT DEFINED");
    },
});
