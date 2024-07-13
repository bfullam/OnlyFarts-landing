import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black">
      <NextSeo
        title="Home: OnlyFarts"
        description="Welcome to OnlyFarts"
        canonical="https://only-farts-landing.vercel.app/"
        openGraph={{
          url: "https://only-farts-landing.vercel.app/",
        }}
      />
      <Head>
        <title>OnlyFarts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
