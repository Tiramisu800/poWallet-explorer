// pages/index.js
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "../components/header";
import SearchComp from "../components/search";

export default function Home() {
  return (
    <>
      <Head>
        <title>Risk Scanner - poWallet</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.main}>
        <Header />
        <SearchComp />
      </section>
    </>
  );
}
