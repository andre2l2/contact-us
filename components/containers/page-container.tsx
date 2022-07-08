import React from "react";

import styles from "@/styles/containers/page-container.module.css";

export const PageContainer: React.FC<any> = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};
