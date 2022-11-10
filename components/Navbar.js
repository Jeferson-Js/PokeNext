import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css"

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src="/img/poke.png" width="40" height="40" alt="Pokebola"/>
                <h1>Poke<span>Next</span></h1>
            </div>
            <ul className={styles.link_items}>
                <Link href="/">
                    <p>Home</p>
                </Link>
                <Link href="/about">
                    <p>About</p>
                </Link>
            </ul>
            </nav>
    );
}
