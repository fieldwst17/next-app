import React from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "@/styles/Details.module.css";

export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/products?limit=15");
  const data = await res.json();
  const paths = data.products.map((item) => {
    return {
      params: { id: String(item.id) },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const res = await fetch("https://dummyjson.com/products/" + id);
  const data = await res.json();
  return {
    // data คือข้อมูลสินค้าที่ไปดึงมาจาก API
    props: { product: data },
  };
}

function ProductDetail({ product }) {
  return (
    <div>
      <Head>
        <title>{product.title}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.img}>
          <Image
            src={product.thumbnail}
            width={400}
            height={400}
            alt={product.title}
          />
        </div>
        <div className={styles.detail}>
          <h1>ชื่อสินค้า : {product.title}</h1>
          <h2>ราคา : $ {product.price}</h2>
          <h3>แบรนด์ : {product.brand}</h3>
          <h3>หมวดหมู่ : {product.category}</h3>
          <h5>รายละเอียดสินค้า : {product.description}</h5>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
