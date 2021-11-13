import React from 'react';

const Footer=()=>{
    return(
        <div className="container-fluid">
            <div className="footer">
            <div className="row">
                
                <div className="col-sm-3">
                    <input type="email" className="form-control" placeholder="Email Address " />
                    <input type ="checkbox" className="footer-checkbox"/>   Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our<a href=""> privacy policy </a>
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-2">
                    <p>Order and Supports</p>
                    <hr/>
                   
                        <p className="footer1">Contact Us<br/>
                    FAQ<br/>
                        Shipping<br/>
                        Returns<br/>
                        Term and Condition</p>
                   
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-2">
                <p>Services</p>
                    <hr/>
                    
                        <p  className="footer1">Live assistance<br/>
                        Corporate gifts<br/>
                        Facial appointments</p>
                       
                   
                </div>
               
                <div className="col-sm-3">
                <p>Location preferences</p>
                    <hr/>
                   
                        <p  className="footer1">Shipping:<u> Hong Kong (S.A.R)</u><br/>
                        Language:<u> English</u></p>
                       
                       
                   
                </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                    <p>Sustainability</p>
                    <hr/>
                   
                        <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
                   
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-2">
                    <p>About</p>
                    <hr/>
                   
                        <p className="footer1">Our Story<br/>
                    FAQ<br/>
                       Foundation<br/>
                    Careers</p>
                   
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-2">
                <p>Social Media</p>
                    <hr/>
                    
                        <p  className="footer1">Instagram<br/>
                        Twitter<br/>
                       LinkedIn<br/>
                       wechat<br/>
                       Webo</p>
                       
                   
                </div>
                </div>
                <hr size="10"/>
                <p><i className="far fa-copyright"></i> Aesop</p>
            </div>
        </div>
    )
}
export default Footer;