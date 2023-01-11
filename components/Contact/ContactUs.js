const ContactUs = () => {
    return (
        <div className="container pt-5 pb-5">
            <div className="row">
                <div className="col-md-5">
                    <div className="contactInfo">
                        <h3>Mr. Name Lastname, IAS</h3>
                        <h4>Mission Director</h4>
                        <h4>(Directorate of Social Justice)</h4>
                        <hr />
                        
                        <p><i className="fa fa-envelope"></i> md.samagra@mp.gov.in</p>
                        <p><i className="fa fa-map-marker"></i> Address: MPSEDC State IT Center, 74, Opposites Maida Mill, Arera Hills, Bhopal, Madhya Pradesh 462004</p>
                        <p><i className="fa fa-phone"></i> Phone no:- 0755- 2700800</p>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="mapAddress">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1735832.4973275687!2d77.30175465!3d31.81688095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390453c367f901f7%3A0x7cfe04c5564b7725!2sHimachal%20Pradesh!5e0!3m2!1sen!2sin!4v1673411766524!5m2!1sen!2sin" 
                    width="100%" 
                    height="400" 
                    loading="lazy" 
                     />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactUs;