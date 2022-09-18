const Footer = () => {
    let year = new Date().getFullYear();
    return (
        <div className='pb-4'>
            <h6 className="text-xs text-center font-quicksand">{process.env.COPYRIGHT_TEXT ? process.env.COPYRIGHT_TEXT : 'tamjid'} &copy; {year}</h6>
        </div>
    );
};

export default Footer;