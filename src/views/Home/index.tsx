import React from "react";

import styles from "./style.module.scss";
import About from "./About";
import SignUp from "./SignUp";
const Home = () => {
  return (
    <div className={styles.homeContanier}>
      <About />
      <SignUp />
    </div>
  );
};

export default Home;
