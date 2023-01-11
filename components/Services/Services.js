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
                                    <a href="https://himparivar.hp.gov.in/index.php/applications/admin/scheme-dashboard" target="_blank" rel="noreferrer">Know More</a>
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
                                    <a href="https://staging12.hp.gov.in/scheme-view" target="_blank" rel="noreferrer">Know More</a>
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
                                    <a href="https://himstaging2.hp.gov.in/superadmin/parivar_scheme" target="_blank" rel="noreferrer">Know More</a>
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
                                    <a href="https://himstaging2.hp.gov.in/superadmin/linked_scheme" target="_blank" rel="noreferrer">Know More</a>
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
                                    <a href="https://himstaging2.hp.gov.in/superadmin/linked_scheme" target="_blank" rel="noreferrer">Know More</a>
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
                                    <a href="https://himstaging2.hp.gov.in/superadmin/verified_scheme_with_parivar" target="_blank" rel="noreferrer">Know More</a>
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

                            <h5 className=''>ऑनलाइन परिवार रजिस्टर पोर्टल</h5>
                        इस पोर्टल के माध्यम से पंचायती राज कर्मचारी/ अधिकारी ऑनलाइन परिवार रजिस्टर का रखरखाव कर सकतें हैं।
                        <p>परिवार रजिस्टर की ऑनलाइन प्रतिलिपि प्राप्त करने के लिये <a href='https://edistrict.hp.gov.in/' target='_blank' rel="noreferrer">क्लिक करे!</a></p>
                        <p>विभाग (परिवार रजिस्टर) की रिपोर्ट के लिये <a href='https://epanchayat.hp.gov.in/DataEntryForm/DPOInternalReportDashboard.aspx' target='_blank' rel="noreferrer">क्लिक करे!</a></p>
                        <p>पंचायत सचिव की सूची जिनका प्रोफाइल पूर्ण या अपूर्ण है . <a href='https://epanchayat.hp.gov.in/Reports/MasterPanchayatSectProfileStatus.aspx' target='_blank' rel="noreferrer">क्लिक करे!</a></p>
                        <p>पंचायत प्रधान की सूची जिनका प्रोफाइल पूर्ण या अपूर्ण है . <a href='https://epanchayat.hp.gov.in/Reports/MasterPanchayatPradhanProfileStatus.aspx' target='_blank' rel="noreferrer">क्लिक करे!</a></p>
                        </figure>
                        <p>
                            
                        

                            <a className={classes.register_now_btn} href="https://epanchayat.hp.gov.in/" target="_blank" rel="noreferrer">Register Now</a>
                        </p>
                    </div>

                    {/* <h2 className='heading'>Latest News</h2> */}

                </div>
            </div>
        </div>
    )
}
export default Services;