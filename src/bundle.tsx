// bundle.tsx
import * as React from "react";
import { createRoot } from "react-dom/client"; 
import EmptyBDForm from "./components/EmptyBDForm";

type EmptyBDStyles = {
  button?: React.CSSProperties;
  form?: React.CSSProperties;
  label?: React.CSSProperties;
  input?: {
    text?: React.CSSProperties;
    select?: React.CSSProperties;
  };
};

declare global {
  interface Window {
    renderEmptyBDForm: (
      selector: string,
      dataKey: string,
      styles?: EmptyBDStyles
    ) => void;
  }
}

window.renderEmptyBDForm = (
  selector: string,
  dataKey: string,
  styles?: EmptyBDStyles
) => {
  const el = document.querySelector(selector);
  if (el) {
    const root = createRoot(el);
    root.render(<EmptyBDForm dataKey={dataKey} styles={styles} />);
  }
};
