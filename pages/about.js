import React from "react";
import styles from "@/styles/About.module.css";
import Image from "next/image";

function about() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>เกี่ยวกับเรา</h1>
        <Image src="/about.svg" alt="logo" width={500} height={500} />
      </div>
    </>
  );
}

export default about;
