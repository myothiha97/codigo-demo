import "../styles/main.scss";
import Head from "next/head";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Codigo Demo</title>
        <meta name="description" content="To demonstrate coding skills" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <div className="navbar-bg"></div>
        <NavBar></NavBar>
        <Component {...pageProps} />
        <Footer></Footer>
      </>
    </div>
  );
}

export default MyApp;
