import Head from 'next/head';
import Header from '../components/layout/header/Header';
import PortfolioRow from '../components/portfolio/PortfolioRow';
import Footer from '../components/layout/footer/Footer';


export default function Home({ data }) {

  return (
    <>
      <Head>
        <title>Fullstack Developer</title>
        <meta name="description" content="Fullstack developer, react js, flutter, laravel, django, express, nodejs, api frontend, backend" />
        <link rel="icon" href="https://img.icons8.com/ios/344/code.png" />
      </Head>

      <div className="flex flex-col justify-between items-center">
        <Header />

        <PortfolioRow data={data} />

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
