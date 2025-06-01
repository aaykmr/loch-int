import React, { useState } from "react";

import showToast from "../../../components/Toast";
import styles from "./style.module.scss";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format check
    return regex.test(email);
  };

  const handleEmailChange = (e: any) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      showToast.success(
        "Email successfully registered. Please check your inbox."
      );
      setEmailError("");
    }
  };

  return (
    <div className={styles.pageContanier}>
      <div className={styles.signUpContainer}>
        <span className={styles.title}>Sign up for exclusive access</span>
        <input
          className={styles.emailInput}
          placeholder="Your email address"
          value={email}
          onChange={handleEmailChange}
          autoFocus
        />
        {emailError.length > 0 && <p className={styles.error}>{emailError}</p>}
        <button className={styles.submit} onClick={handleSubmit}>
          Get started
        </button>
        <p className={styles.subtitle}>
          You’ll receive an email with an invite link to join.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
