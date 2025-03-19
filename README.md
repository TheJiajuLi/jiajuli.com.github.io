# Dreaming Polar

![Dreaming Polar Logo](/assets/logos/logo_8_mini.jpeg)

An immersive music experience with stunning visualizations, built with React, TypeScript, and Vite.

## 🎵 Features

- Immersive music visualization
- Real-time audio processing
- Responsive design
- Cross-platform compatibility

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/dreamingpolar.com.github.io.git
cd dreamingpolar.com.github.io
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

## 🛠️ Tech Stack

- [React](https://reactjs.org/) - UI Framework
- [TypeScript](https://www.typescriptlang.org/) - Programming Language
- [Vite](https://vitejs.dev/) - Build Tool
- [ESLint](https://eslint.org/) - Linting

## 📝 ESLint Configuration

For production applications, we recommend enabling type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

### Additional React Lint Rules

Install and configure React-specific lint rules:

```bash
npm install -D eslint-plugin-react-x eslint-plugin-react-dom
```

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## 📞 Contact

- Email: contact@dreamingpolar.com
- Personal website: [Jiaju Li](https://www.jiajuli.com)
