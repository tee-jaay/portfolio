import React from 'react';
import Image from 'next/image';

const PortfolioGrid = ({ data }) => {
    return (
        <section className="bg-gray-100 py-10 px-12">
            <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {data.items.map((item, index) =>
                    <div key={index} className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-100 bg-white duration-300 hover:-translate-y-1">
                        <figure>
                            <Image src={item.fields.imgSrc} alt={item.fields.title} height={267} width={400} />
                            <figcaption className="p-4">
                                <p className="text-lg mb-4 font-bold leading-relaxed text-black-800" >{item.fields.title}</p>
                                <small className="leading-5 text-black-500">{item.fields.description}</small>
                            </figcaption>
                        </figure>
                        <div className='flex flex-row justify-around py-6'>
                            <a href={item.fields.youtubeLink} target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                                </svg>
                            </a>
                            <a href={item.fields.sourceLink} target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                                </svg>
                            </a>
                            <a href={item.fields.liveLink} target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                                </svg>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default PortfolioGrid;