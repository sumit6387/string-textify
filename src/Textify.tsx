import React from 'react';
import { parseFormattedText } from './parser';

interface Props {
  children: string;
}

const Textify: React.FC<Props> = ({ children }) => {
  const tokens = parseFormattedText(children);

  return (
    <div style={{ whiteSpace: 'pre-wrap' }}>
      {tokens.map((token, idx) => {
        switch (token.type) {
          case 'bold':
            return <strong key={idx}>{token.content}</strong>;
          case 'italic':
            return <em key={idx}>{token.content}</em>;
          case 'underline':
            return <u key={idx}>{token.content}</u>;
          case 'strikethrough':
            return <s key={idx}>{token.content}</s>;
          case 'code':
            return (
              <code
                key={idx}
                style={{
                  background: '#f4f4f4',
                  padding: '2px 4px',
                  borderRadius: '4px',
                  fontFamily: 'monospace',
                }}
              >
                {token.content}
              </code>
            );
          case 'link':
            return (
              <a
                key={idx}
                href={token.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#007bff', textDecoration: 'underline' }}
              >
                {token.content}
              </a>
            );
          default:
            return <span key={idx}>{token.content}</span>;
        }
      })}
    </div>
  );
};

export default Textify;
