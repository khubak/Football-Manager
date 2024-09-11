import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopBar from "./components/TopBar.jsx";
import {BrowserRouter} from "react-router-dom"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <TopBar />
      <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);