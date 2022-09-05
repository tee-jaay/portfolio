import React from 'react';

const Footer = () => {
    let year = new Date().getFullYear();
    return (
        <footer className="mt-4 py-4">
            <span font-quicksand className='text-xs'>tamjid &copy; {year}</span>
        </footer>
    );
};

export default Footer;