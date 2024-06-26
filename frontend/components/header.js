// components/Header.js
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import Logo from "../public/assets/logo.png";

const Header = () => {
  return (
    <section className={styles.header}>
      <section className={styles.navbar}>
        <Image src={Logo} alt="Etherscan Logo" className={styles.logo} />
        <section className={styles.menu}>
          <Link href="/" className={styles.menuLink}>
            Home
          </Link>
          <Link href="/about" className={styles.menuLink}>
            About
          </Link>
          <Link href="/risk" className={styles.menuLink}>
            Top risk
          </Link>
          <Link href="http://143.110.178.16:8000/swagger/" className={styles.menuLink}>
            API
          </Link>
          <Link href="/report" className={styles.menuLink}>
            Report
          </Link>
        </section>
      </section>
    </section>
  );
};

export default Header;
