import React from "react";

import styles from "@/styles/inputs/text-inputs.module.css";

interface TextInputProps {
  placeholder: string;
}

export const TextInput: React.FC<TextInputProps> = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder={placeholder} className={styles.input} />
    </div>
  );
};
