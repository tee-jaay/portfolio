import Head from 'next/head';
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
        <div className="header py-8">
          <h2 className="text-center font-bold text-4xl font-quicksand">
            Fullstack Developer
          </h2>

          <p className="sub-header leading-9 text-2xl font-quicksand">
            I am a software developer with a passion for building web & mobile applications
          </p>
        </div>

        <PortfolioGrid data={data} />

        <footer className="py-4">
          <span font-quicksand>tamjid &copy; 2022</span>
        </footer>
      </div>

    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.CONTENTFUL_API_BASE}/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`);
  const data = await res.json();

  return { props: { data } };
}
