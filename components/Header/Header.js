import dynamic from 'next/dynamic'
import Script from 'next/script'
import classes from './Header.module.css'
import logo from './../../public/him-logo.png';
import { useRouter } from 'next/router';
import Link from 'next/link';


const Header = () => {

    const router = useRouter();

    const DynamicHeader = dynamic(() => import('./Boostrapjs'), {
    ssr: false,
    })
    
    
    return (
        <>
        <Script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" onLoad={() => {
        const googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement({ pageLanguage: 'en'} , 'google_translate_element')
        }
        window.googleTranslateElementInit = googleTranslateElementInit;
        }}/>

        <header>
            <DynamicHeader />
            <div className='bg-gray'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 d-flex align-items-center'>
                            <ul className={classes.topNav}>
                                <li><a href='#!'>Screen Reader</a></li>
                                <li><a href='#serviceSection'>Skip to Main Content</a></li>
                                <li><a href='#navigation'>Skip to Navigation</a></li>
                            </ul>
                        </div>
                        <div className='col-md-6 d-flex align-items-center justify-content-end'>
                            <ul className={classes.topNav}>
                                <li><div id="google_translate_element"></div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container pt-3 pb-3'>
            <div className='row'>
                <div className='col-md-2 d-flex align-items-center justify-content-end'><img src={logo.src} className={`img-fluid ${classes.logoHeader}`} alt="" /></div>
                <div className='col-md-8 d-flex justify-content-center align-items-center'>
                    <div>
                    <h5 className={classes.headerMainText}>H.P. STATE ELECTRONICS DEVELOPMENT CORPORATION LTD.</h5>
                    <p className='text-center fw-bold'>A Government of HP Undertaking</p>
                    </div>
                </div>
                <div className='col-md-2 d-flex align-items-center'><img src="https://hpsedc.in/wp-content/uploads/2021/08/hplogo.png" className={`img-fluid ${classes.logoHeader}`} alt="" /></div>
            </div>
            </div>
            <div className='bg-primary'>
            <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-dark" id="navigation">
                <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                            <Link href="/">
                            <a className={`${'nav-link'} ${router.pathname == '/' ? 'active' : ''}`} aria-current="page">
                                Home
                            </a>
                            </Link>
                        </li>
                        
                        <li>
                            <Link href="/about-us">
                            <a className={`${'nav-link'} ${router.pathname == '/about-us' ? 'active' : ''}`}>
                                About Us
                            </a>
                            </Link>
                        </li>
                        
                        <li>
                            <Link href="/services">
                            <a className={`${'nav-link'} ${router.pathname == '/services' ? 'active' : ''}`}>
                                Services
                            </a>
                            </Link>
                        </li>
                        
                        <li>
                            <Link href="/contact">
                            <a className={`${'nav-link'} ${router.pathname == '/contact' ? 'active' : ''}`}>
                                Contact Us
                            </a>
                            </Link>
                        </li>
                    
                    </ul>
                </div>
                </div>
            </nav>
            </div>
            </div>
        </header>
        </>
    )
}
export default Header;