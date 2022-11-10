import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae pariatur quod tenetur incidunt consequatur
                accusantium dolorem quam quisquam corporis numquam itaque,
                tempore iste ducimus placeat cumque in fugit? Minima esse fugiat
                dolores, voluptate ut enim quaerat sunt architecto repellat
                neque dignissimos itaque exercitationem ducimus quidem porro
                alias ullam, obcaecati necessitatibus!
            </p>
            <div className={styles.charizard}>
                <Image
                    src="/img/charizard.png"
                    width="400"
                    height="400"
                    alt="Charizard"
                />
            </div>
        </div>
    );
}
