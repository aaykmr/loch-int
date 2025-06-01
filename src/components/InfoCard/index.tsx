import React from "react";

import styles from "./style.module.scss";

interface InfoCardProps {
  icon?: any;
  title: string;
  subtitle: string;
  rightView?: boolean;
  className?: string;
}

const InfoCard = ({
  icon,
  title,
  subtitle,
  rightView,
  className,
}: InfoCardProps) => {
  console.log("🚀 ~ :20 ~ className:", className);

  return (
    <div
      className={`${styles.infoCardContainer} ${className || ""}`}
      style={{ alignItems: rightView ? "flex-end" : "flex-start" }}
    >
      <img src={icon} alt={"icon"} className={styles.infoCardIcon} />
      <p
        className={styles.title}
        style={{ textAlign: rightView ? "right" : "left" }}
      >
        {title}
      </p>
      <p
        className={styles.subtitle}
        style={{ textAlign: rightView ? "right" : "left" }}
      >
        {subtitle}
      </p>
    </div>
  );
};

export default InfoCard;
