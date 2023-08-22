import React from "react";

import styles from "./Box.module.css";

export default function Box({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.box}>
      <h2 className={styles.box__title}>{title}</h2>
      {children}
    </div>
  );
}
