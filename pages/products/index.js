import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Product.module.css";

// เรียกใช้งาน API
// https://dummyjson.com/products?limit=20
export async function getStaticProps() {
  const res = await fetch("https://dummyjson.com/products?limit=15");
  const data = await res.json();
  console.log(data);

  // return ออกมา
  return {
    // ส่งเป็น props ออกไปตั้งชื่อว่า products
    props: { products: data.products },
  };
}

// นำ props products มาใช้งาน
function index({ products }) {
  return (
    <>
      <Head>
        <title>สินค้าทั้งหมด</title>
      </Head>
      <div className={styles.head}>
        <h1>สินค้าทั้งหมด</h1>
      </div>
      <div className={styles.container}>
        {/* Map array */}
        {products.map((item) => (
          <div className={styles.card} key={item.id}>
            <Link href={"/products/" + `${item.id}`}>
              <Image
                className={styles.img}
                src={item.thumbnail}
                width={400}
                height={300}
                alt={item.title}
              />
              <ul>
                <li className={styles.title}>{item.title}</li>
                <li className={styles.titlePrice}>$ {item.price}</li>
              </ul>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default index;
