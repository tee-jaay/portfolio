import Head from 'next/head';
import Footer from '../components/layout/footer/Footer';
import Header from '../components/layout/header/Header';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import styles from '../styles/Home.module.css';

export default function Home({ data }) {

  return (
    <>
      <Head>
        <title>Fullstack Developer</title>
        <meta name="description" content="Fullstack developer, react js, flutter, laravel, django, express, nodejs, api frontend, backend" />
        <link rel="icon" href="https://img.icons8.com/ios/344/code.png" />
      </Head>

      <div className="flex flex-col h-full justify-around items-center">
        <Header />

        <PortfolioGrid data={data} />

        <Footer />
      </div>

    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.CONTENTFUL_API_BASE}/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`);
  const data = await res.json();

  return { props: { data } };
}
