import classes from './Services.module.css';

const Services = () => {
    return (
        <div className="container pt-5" id="serviceSection">
            <div className="row">
                <div className="col-md-8">
                    <h2 className='heading'>Services</h2>
                    <div className="row">
                        <div className="col-md-4">

                            <div className={classes.Business_box}>
                                <h3>eKYC</h3>
                                <div className={classes.serviceIcon}>
                                <span className='fa fa-file'></span>
                                </div>
                                <p>
                                    <a href="https://www.mpsedc.mp.gov.in/ITAct_2000_CMS" target="_blank" rel="noreferrer">Know More</a>
                                </p>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className={classes.Business_box}>
                                <h3>Scheme</h3>
                                <div className={classes.serviceIcon}>
                                <span className='fa fa-file'></span>
                                </div>
                                <p>
                                    <a href="https://www.mpsedc.mp.gov.in/ITAct_2000_CMS" target="_blank" rel="noreferrer">Know More</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">

                            <div className={classes.Business_box}>
                                <h3>Beneficiary Verification</h3>
                                <div className={classes.serviceIcon}>
                                <span className='fa fa-file'></span>
                                </div>
                                <p>
                                    <a href="https://www.mpsedc.mp.gov.in/ITAct_2000_CMS" target="_blank" rel="noreferrer">Know More</a>
                                </p>
                            </div>

                        </div>

                        <div className="col-md-4">

                            <div className={classes.Business_box}>
                                <h3>Beneficiary Scheme Dashboard</h3>
                                <div className={classes.serviceIcon}>
                                <span className='fa fa-bar-chart'></span>
                                </div>
                                <p>
                                    <a href="https://www.mpsedc.mp.gov.in/ITAct_2000_CMS" target="_blank" rel="noreferrer">Know More</a>
                                </p>
                            </div>

                        </div>
                        <div className="col-md-4">
                            <div className={classes.Business_box}>
                                <h3>Search</h3>
                                <div className={classes.serviceIcon}>
                                <span className='fa fa-search'></span>
                                </div>
                                <p>
                                    <a href="https://www.mpsedc.mp.gov.in/ITAct_2000_CMS" target="_blank" rel="noreferrer">Know More</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">

                            <div className={classes.Business_box}>
                                <h3>Verified Schemes</h3>
                                <div className={classes.serviceIcon}>
                                <span className='fa fa-file'></span>
                                </div>
                                <p>
                                    <a href="https://www.mpsedc.mp.gov.in/ITAct_2000_CMS" target="_blank" rel="noreferrer">Know More</a>
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="col-md-4">
                    
                    
                    <div className={classes.invest}>
                        <figure>
                        {/* https://www.mpsedc.mp.gov.in/images/investmp_logo-23.png */}
                            <img src="" alt="" />
                        </figure>
                        <p>
                            <a href="contents.aspx?page=Global Investors Summit 2023&amp;number=imEByRHFetvehyPsdKB23g==">Know More</a>
                            <a className={classes.register_now_btn} href="https://investmp.in/gis/public/registration" target="_blank" rel="noreferrer">Register Now</a>
                        </p>
                    </div>

                    {/* <h2 className='heading'>Latest News</h2> */}

                </div>
            </div>
        </div>
    )
}
export default Services;