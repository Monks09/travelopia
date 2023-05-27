import React from "react";
import { Link } from "react-router-dom";
import styles from "./ConfirmSub.module.css";

function ConfirmSub({ id }) {
  return (
    <div className={styles.ConfirmSub}>
      <h2>Thanks for planning your journey with us!</h2>
      <h2>Your Submission has been confirmed with Id: {id}</h2>
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  );
}

export default ConfirmSub;
