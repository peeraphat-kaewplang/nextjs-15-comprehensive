// app/_components/MyButton/MyButton.js
"use client"; // If it needs interactivity
import styles from './MyButton.module.css'; // CSS Module for this component

export default function MyButton({ text, onClick }) {
  return (
    <button className={styles.customButton} onClick={onClick || (() => alert(text))}>
      {text}
    </button>
  );
}