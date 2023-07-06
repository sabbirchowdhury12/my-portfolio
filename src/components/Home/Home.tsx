import { FC } from "react";
import Content from "./HomeSection/Content";
import Social from "./HomeSection/Social";

const Home: FC = () => {
  return (
    <section className="home container">
      <Social />
      <div className="right">
        <Content />
        <div className="home_img"></div>
      </div>
    </section>
  );
};

export default Home;
