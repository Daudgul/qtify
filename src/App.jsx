import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Headeer from "./components/Headeer";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ResponsiveAppBar />
      <Headeer />
      <Footer />
    </>
  );
}

export default App;
