import Head from 'next/head';
import Portfolio from '../components/portfolio/Portfolio';
import styles from '../styles/Home.module.css';

export default function Home({ data }) {

  return (
    <>
      <Head>
        <title>Fullstack Developer</title>
        <meta name="description" content="Fullstack developer, react js, flutter, laravel, django, express, nodejs, api frontend, backend" />
        <link rel="icon" href="https://img.icons8.com/ios/344/code.png" />
      </Head>

      <div className="flex flex-col h-screen justify-around items-center">
        <div className="header">
          <h2 className="text-center font-bold text-4xl font-quickSand">
            Fullstack Developer
          </h2>

          <p className="sub-header leading-9 text-2xl font-quickSand">
            I am a software developer with a passion for building web & mobile applications
          </p>
        </div>

        <main className="flex flex-row justify-center items-start font-quickSand mx-auto w-11/12">
          <Portfolio data={data} />
        </main>


        <footer className="">
          <span font-quickSand>Tamjid &copy; 2022</span>
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
