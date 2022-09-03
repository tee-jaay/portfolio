import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Home.module.css';

const Portfolio = ({ data }) => {
    return (
        <>
            {data.items.map((item, index) =>
                <div key={index} className={styles.neomorphic + "w-1/4"} >
                    <div className="w-84 p-2 h-84 bg-white">
                        <img src={item.fields.imgSrc} alt={item.fields.title} style={{ height: '200px' }} />
                        <h2 className='font-bold'>{item.fields.title}</h2>
                        {/* <Image src={item.fields.imgSrc} alt={item.fields.title} height={300} width={200} /> */}
                        <p>{item.fields.description}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Portfolio;