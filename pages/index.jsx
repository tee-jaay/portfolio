import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/layout/header/Header';
import PortfolioRow from '../components/portfolio/PortfolioRow';
import SkillsGrid from "../components/skills/SkillsGrid";
import Footer from '../components/layout/footer/Footer';

export default function Home({ data }) {
  const [activeTab, setActiveTab] = useState("skills");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Head>
        <title>Fullstack Developer</title>
        <meta name="description" content="Fullstack developer, react js, flutter, laravel, django, express, nodejs, api frontend, backend" />
        <link rel="icon" href="https://img.icons8.com/ios/344/code.png" />
      </Head>

      <div className="flex flex-col">
        <div>
          <Header />
          <div className="flex flex-row justify-center space-x-4 mt-8 mb-6">
            <button
              className={`px-4 py-2 rounded-md ${activeTab === "skills" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
              onClick={() => handleTabClick("skills")}
            >
              Skills
            </button>
            <button
              className={`px-4 py-2 rounded-md ${activeTab === "portfolio" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
              onClick={() => handleTabClick("portfolio")}
            >
              Portfolio
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-between h-max">

          <div className="mt-4 mb-16">
            {activeTab === "skills" ? <SkillsGrid /> : <PortfolioRow data={data} />}
          </div>

          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.CONTENTFUL_API_BASE}/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`);
  const data = await res.json();

  return { props: { data } };
}
