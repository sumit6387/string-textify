export interface Token {
  type: 'text' | 'bold' | 'italic' | 'underline' | 'strikethrough' | 'code' | 'link';
  content: string;
  href?: string;
}

const rules: { regex: RegExp; type: Token['type']; getToken?: (match: RegExpExecArray) => Token }[] = [
  { regex: /\*\*\*\*(.+?)\*\*\*\*/g, type: 'bold' },
  { regex: /\*\*(.+?)\*\*/g, type: 'bold' },
  { regex: /\*(.+?)\*/g, type: 'italic' },
  { regex: /__(.+?)__/g, type: 'underline' },
  { regex: /~~(.+?)~~/g, type: 'strikethrough' },
  { regex: /`(.+?)`/g, type: 'code' },
  {
    regex: /\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g,
    type: 'link',
    getToken: (match: RegExpExecArray): Token => ({
      type: 'link',
      content: match[1],
      href: match[2],
    }),
  },
];

export function parseFormattedText(input: string): Token[] {
  const tokens: Token[] = [];
  let text = input;

  while (text.length > 0) {
    let matched = false;

    for (const { regex, type, getToken } of rules) {
      regex.lastIndex = 0;
      const match = regex.exec(text);

      if (match && match.index === 0) {
        if (getToken) {
          tokens.push(getToken(match));
        } else {
          tokens.push({ type, content: match[1] });
        }
        text = text.slice(match[0].length);
        matched = true;
        break;
      }
    }

    if (!matched) {
      tokens.push({ type: 'text', content: text[0] });
      text = text.slice(1);
    }
  }

  return tokens;
}
