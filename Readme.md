# 📝 String-Textify

**String-Textify** is a lightweight React component that renders rich text using Markdown-style formatting — no external Markdown libraries needed.

> Supports **bold**, *italic*, __underline__, ~~strikethrough~~, `inline code`, and [links](https://example.com).

---

## ✨ Features

- Supports inline formatting with familiar Markdown syntax
- Lightweight and fast — no third-party parser required
- Tree-shakeable and easy to integrate
- TypeScript support out of the box

---

## 📦 Installation

```bash
npm i string-textify
```
or with Yarn:

```bash
yarn add string-textify
```

## 🚀 Usage
```bash
import React from 'react';
import { Textify } from 'string-textify';

export default function App() {
  return (
    <Textify>
      {`This is **bold**, *italic*, __underlined__, ~~struck~~, \`code\`, and a [link](https://example.com).`}
    </Textify>
  );
}

```
## 🧪 Example
```bash
<Textify>
{`
Visit our [website](https://openai.com).

This is **bold**, *italic*, __underlined__, and ~~struck~~.
Also: \`inline code\`.
`}
</Textify>

```

# ✅ Supported Syntax

| Markdown Syntax              | Output                     |
|------------------------------|----------------------------|
| `**bold**` / `****bold****` | **bold**                   |
| `*italic*`                  | *italic*                   |
| `__underline__`             | <u>underline</u>           |
| `~~strikethrough~~`         | ~~strikethrough~~          |
| `` `inline code` ``         | `inline code`              |
| `[label](https://...)`      | [label](https://example.com) |


## 📂 Project Structure
```bash
textify/
├── src/
│   ├── parser.ts
│   ├── Textify.tsx
│   └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## 🪪 License
MIT © Sumit Kumar

