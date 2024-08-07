const Footer = () => {
    let year = new Date().getFullYear();
    return (
        <div className='pb-4'>
            <h6 className="text-xs text-center font-quicksand">Copyright &copy; {year}. <span className="font-bold">{process.env.COPYRIGHT_TEXT ? process.env.COPYRIGHT_TEXT : 'tamjid'}</span> All Rights Reserved.</h6>
        </div>
    );
};

export default Footer;