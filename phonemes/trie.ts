export type Trie = string;

const trieMap = {
  g: {
    terminal: "g",
    children: {
      ge: {
        terminal: "xe",
      },

      gi: {
        terminal: "xi",
      },

      gu: {
        terminal: "gu",
        children: {
          gue: {
            terminal: "ge",
          },
          gui: {
            terminal: "gi",
          },
        },
      },
    },
  },
};

export const trie = (input: string[]): Trie => {
  return trieMap[input];
};
