import React from "react";

import InfoCard from "../../../components/InfoCard";

import Logo from "../../../assets/icons/Logo.svg";
import Bell from "../../../assets/icons/Bell.svg";
import Eye from "../../../assets/icons/Eye.svg";
import Card1 from "../../../assets/images/Card1.png";
import Card2 from "../../../assets/images/Card2.png";
import Card3 from "../../../assets/images/Card3.png";
import Comment1 from "../../../assets/images/Comment1.png";
import Comment2 from "../../../assets/images/Comment2.png";
import Comment3 from "../../../assets/images/Comment3.png";
import Watch from "../../../assets/images/Watch.png";

import styles from "./style.module.scss";
import AutoScroll from "../../../components/AutoScroll";

const About = () => {
  return (
    <div className={styles.aboutContanier}>
      <div className={styles.aboutRow}>
        <InfoCard
          icon={Bell}
          title="Get notified when a highly correlated whale makes a move"
          subtitle="Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active."
        />
        <AutoScroll className={styles.autoScroll}>
          <img src={Card1} className={styles.feature} alt={"card"} />
          <img src={Card2} className={styles.feature} alt={"card"} />
          <img src={Card3} className={styles.feature} alt={"card"} />
        </AutoScroll>
      </div>
      <div className={`${styles.aboutRow} ${styles.aboutRowPadded}`}>
        <img src={Watch} className={styles.watchImage} alt={"watch"} />
        <InfoCard
          icon={Eye}
          title="Watch what the whales are doing"
          subtitle="All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing."
          rightView
        />
      </div>
      <div className={styles.aboutRow}>
        <div className={styles.testimonialsContainer}>
          <span className={styles.testimonialsHeading}>
            <span className={styles.testimonialsTitle}>Testimonials</span>
          </span>
          <div className={styles.testimonialsListContainer}>
            <img className={styles.logo} src={Logo} alt="logo" />
            <AutoScroll className={styles.autoScroll}>
              <img className={styles.comments} src={Comment1} alt="comments" />
              <img className={styles.comments} src={Comment2} alt="comments" />
              <img className={styles.comments} src={Comment3} alt="comments" />
            </AutoScroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
