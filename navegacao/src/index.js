import "./index.css";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./views/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
