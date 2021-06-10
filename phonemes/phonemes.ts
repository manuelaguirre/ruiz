import type { Grapheme } from "../graphemes/mod.ts";

const slicePhoneme = (graphemes: Grapheme[]) => {
  const node = trie(graphemes[0]);

  const terminal = "hola";
  const nonTerminal = ["perro", "gato"] as Grapheme[];
  return [terminal, ...nonTerminal] as const;
};

export const getPhonemes = (graphemes: Grapheme[]) => {
  const [terminal, nonTerminal] = slicePhoneme(graphemes);
  return [terminal, getPhonemes(nonTerminal)];
};
