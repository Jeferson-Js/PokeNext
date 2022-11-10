import Footer from "./Footer";
import Navbar from "./NavBar";
import Head from "next/head";
import Link from "next/link";

export default function Layout({children}){
    return(
        <>
        <Head>
            <Link rel="shortcut icon" href="/img/poke.png"/>
            <title>PokeNext</title>
        </Head>
        <Navbar/>
            <main className="main-container">{children}</main>
        <Footer/>
        </>
    )
} 