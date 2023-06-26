import darkModeContext from "../../context/darkModeContext";
import Content from "./HomeSection/Content";
import Social from "./HomeSection/Social";
import {useEffect, useContext} from 'react'

const Home = () => {

    // const { isDarkMode } = useContext(darkModeContext)
    // useEffect(() => {
    //     if (isDarkMode) {
    //         document.body.classList.add("dark");
    //     } else {
    //         document.body.classList.remove("dark");
    //     }
    // }, [isDarkMode]);


    return (
        <section className="home">
         
           <Social/>
           <div className="right">
            <Content/>
         <div className="home_img"></div>
        </div>
        </section>
    );
};

export default Home;