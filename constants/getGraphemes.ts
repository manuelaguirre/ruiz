import { graphemes } from "./graphemes.ts"

export const getGraphemes = (word: string): string[] => {
    if (word) {
        const digraph = word.slice(0, 2)
        if (graphemes.has(digraph)) {
            return [digraph, ...getGraphemes(word.slice(2))]
        } else {
            return [word[0], ...getGraphemes(word.slice(1))]
        }
    }
    return []
}