import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <main className="font-mont font-medium bg-light min-h-screen">
            <App />
        </main>
    </React.StrictMode>
);
