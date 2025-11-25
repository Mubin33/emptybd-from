# 📦 EmptyBD Form

A reusable and dynamic form component for **React, Next.js and Raw HTML projects**, built with **TypeScript** and styled using **Tailwind CSS**. Designed for dashboards, admin panels, and partner integrations where forms are rendered dynamically using a unique project key.

---

## ✨ Features

* ✅ Works with React & Next.js
* ✅ CDN support for normal HTML websites
* ✅ Dynamic form rendering using key
* ✅ Fully customizable styling
* ✅ Secure partner-based usage system
* ✅ Lightweight and easy to integrate

---

## 🔐 Support Policy

**Official Support:** Full support will be provided only to the registered user of the package.

**Third-Party Support:** Requests from anyone other than the registered user will not be entertained.

This ensures focused, secure, and professional assistance for verified users.

---

## 📥 Installation

Using npm:

```bash
npm install emptybd-form
```

Using yarn:

```bash
yarn add emptybd-form
```

---

## 🚀 React / Next.js Usage

```tsx
import EmptyBDForm from 'emptybd-form';

const MyPage = () => {
  return (
    <EmptyBDForm
      dataKey="projectkey123"
      styles={{
        button: { backgroundColor: '#2563eb', color: '#fff' },
        label: { fontWeight: 'bold' }
      }}
    />
  );
};

export default MyPage;
```

---

## 🌐 Raw HTML / Vanilla JS Usage (Without React)

If your website is built with plain HTML, CSS, and JavaScript, you can still use EmptyBD Form via CDN.

### ✅ Example:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EmptyBD Form Demo</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@latest/dist/tailwind.min.css" rel="stylesheet">
</head>

<body>

    <div id="my-form"></div>

    <script src="https://cdn.jsdelivr.net/npm/emptybd-form@1.1.7/dist/bundle.js"></script>
    <script>
        window.renderBetopiaForm("#my-form", "projectkey123", {
            button: {
                backgroundColor: "#000",
                color: "black",
                fontWeight: "bold",
                borderRadius: "2px"
            },
        });
    </script>


</body>

</html>
```

---

## 🧩 Function Signature (CDN Mode)

```js
window.renderBetopiaForm(selector, dataKey, styles);
```

| Parameter | Type              | Description                               |
| --------- | ----------------- | ----------------------------------------- |
| selector  | string            | Target container selector (e.g. #my-form) |
| dataKey   | string            | Unique project / partner key              |
| styles    | object (optional) | Custom styling configuration              |

---

## 🎨 Styling Options

```ts
styles?: {
  form?: CSSProperties;
  button?: CSSProperties;
  label?: CSSProperties;
  input?: {
    text?: CSSProperties;
    select?: CSSProperties;
  };
}
```

### Example:

```js
styles: {
  button: { backgroundColor: 'red', color: '#fff' },
  label: { fontSize: '14px' },
  input: {
    text: { border: '1px solid gray' }
  }
}
```

---

## 📦 Package Info

* Name: emptybd-form
* Version: 1.1.7
* Framework: React + TypeScript
* Styling: Tailwind + Inline CSS

---

## 🛡 Security Note

Each form is rendered based on a unique `dataKey`. Unauthorized keys will not render form data or functionality.

---

## 📞 Need Help?

Support is available only for registered package users.
Please contact EmptyBD official support for assistance.

---

## ⭐ Summary

* ✔ React & Next.js Ready
* ✔ CDN Support for HTML sites
* ✔ Secure key-based system
* ✔ Highly customizable

---

Made with ❤️ by EmptyBD Team



<!-- **Partner EmptyBD Form**

A reusable EmptyBD Form Component for React & Next.js built with TypeScript and Tailwind CSS, designed for dynamic form generation and API integration. This package is ideal for dashboards and admin panels where forms need to be rendered based on a unique key.

**Support Policy**

Official Support: Full support will be provided directly only to the registered user of the package.

Third-Party Support: Requests from anyone other than the registered user will not be entertained.

This ensures focused and secure assistance for genuine users.


📦 Installation
```js
npm i emptybd-form
```

or

```js
yarn add emptybd-form
```

🚀 Usage Example

```
import BetopiaForm from 'emptybd-form';


const MyPage = () => {
return (
    <BetopiaForm
        formKey="project-123"
        style="dark"
    />
  );
};

export default MyPage;
``` -->


<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
``` -->
