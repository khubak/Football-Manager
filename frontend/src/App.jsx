import "./App.css";
import TopBar from "./components/TopBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
}

export default App;
