import React from 'react'
import styles from "../styles/styles.module.css";

interface Props {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  [x: string]: any;
}

export const CustomLabel = ({ label, type }: Props) => {
  let size;
  switch (type) {
    case "h1":
      size = 2.125;
      break;
    case "h2":
      size = 1.875;
      break;
    case "h3":
      size = 1.5;
      break;
    case "h4":
      size = 1.25;
      break;
    case "h5":
      size = 1.125;
      break;
    case "h6":
      size = 1;
      break;
    default:
      size = 1;
      break;
  }

  return (
    <>
      <div>
        <label className={styles.field__label} style={{ fontSize: `${size}rem` }}>
          {label}
        </label>
      </div>
    </>
  );
};
