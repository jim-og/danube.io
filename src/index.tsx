import { createRoot } from 'react-dom/client';
import React from "react";
import "./index.css";
import App from "./App";

const container = document.getElementById('root');
const root = createRoot(container!); // The '!' tells TS the element exists
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
