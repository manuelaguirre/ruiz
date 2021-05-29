import { Grapheme, isGrapheme } from "./types.ts"
export const getGraphemes = (word: string): Grapheme[] => {
    if (word) {
        const digraph = word.slice(0, 2)
        if (isGrapheme(digraph)) {
            return [digraph, ...getGraphemes(word.slice(2))]
        } else {
            return [word[0], ...getGraphemes(word.slice(1))]
        }
    }
    return []
}