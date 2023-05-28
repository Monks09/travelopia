import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <h1>Travelopia</h1>
      </div>
      <div className={styles.links}>
        <Link to="/" data-testid="form-page-link">
          FORM
        </Link>
        <Link to="/dashboard" data-testid="dashboard-page-link">
          DASHBOARD
        </Link>
      </div>
    </div>
  );
}

export default Header;
