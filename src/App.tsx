import { useEffect, useState } from "react";
import darkModeContext from "./context/darkModeContext";
import Header from "./components/Header/Header";
import "./style/Custom.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skill from "./Skill/Skill";

function App() {
  const [isDarkMode, setIsDarkMOde] = useState<boolean>(false);

  const toggleIsDarkMode = (): void => {
    localStorage.setItem("isDarkMode", JSON.stringify(!isDarkMode));
    setIsDarkMOde(!isDarkMode);
  };

  useEffect(() => {
    const isDark: boolean = localStorage.getItem("isDarkMode") == "true";
    console.log(localStorage.getItem("isDarkMode"));
    console.log(isDarkMode);
    setIsDarkMOde(isDark);
  }, [isDarkMode]);

  return (
    <darkModeContext.Provider value={{ toggleIsDarkMode, isDarkMode }}>
      <div className="App">
        <Header />
        <Home />
        <About />
        <Skill />
      </div>
    </darkModeContext.Provider>
  );
}

export default App;
