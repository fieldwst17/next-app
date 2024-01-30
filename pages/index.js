import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>หน้าแรก</title>
        <meta name="keyword" content="Field,ขายหนังสือ,ของแต่งรถ"/>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>หน้าแรก</h1>
        <Image src="/shopping.svg" alt="logo" width={400} height={400} />
        <p>Welcome To Shopping Mall</p>
        <Link href="/products" className={styles.btn}>
          สินค้าทั้งหมด
        </Link>
      </div>
    </>
  );
}
