import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Page from "./user/page";

export default function page() {
  return (
    <div className={styles.head}>
      <h1>CRUD APP</h1>
      <Page />
    </div>
  );
}
