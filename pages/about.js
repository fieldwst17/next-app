import React from "react";
import styles from "@/styles/About.module.css";
import Image from "next/image";
import Head from "next/head";

function about() {
  return (
    <>
    <Head>
      <title>เกี่ยวกับเรา</title>
    </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>เกี่ยวกับเรา</h1>
        <Image src="/about.svg" alt="logo" width={500} height={500} />
      </div>
    </>
  );
}

export default about;
