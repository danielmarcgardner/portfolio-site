import React from "react";
import * as styles from "../styles/transition.module.scss";

const Transition = ({ transition }) => {
  return <div className={styles.transition}>{transition}</div>;
}

export default Transition;