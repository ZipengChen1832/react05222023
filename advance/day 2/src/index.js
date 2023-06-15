import { createRoot } from "react-dom/client";
import React from "react";
import Count from "./components/Count";
import "./index.css"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// jsx syntax
root.render(
  <div>
    <Count />
    <Count />
    <Count />
    <Count />
    <Count />
  </div>
);
