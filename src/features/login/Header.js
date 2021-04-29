import React from "react";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import { selectProfile } from "./loginSlice";

const Header = () => {
  const profile = useSelector(selectProfile);
  return (
    <div className={styles.header}>
      <h1>{profile.username}</h1>
      <h3>Today's Task</h3>
    </div>
  );
};

export default Header;
