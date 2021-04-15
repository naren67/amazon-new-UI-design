import React from 'react'
import './Footer.css'

function Footer() {
          return (
                    <div className='footer'>
                              <div className="footer__btn">
                                        <button><a href="#comeUp">back to top</a></button>
                              </div>
                              <div className="footer__infos">

                                       <div className="footer__info">
                                       <h3 className="footer__header">
                                                  Get to know us
                                        </h3>
                                        <div className="footer__info">
                                                  <p>About Us</p>
                                                  <p>Careers</p>
                                                  <p>Press Releases</p>
                                                  <p>Amazon Cares</p>
                                                  <p>Gift a Smile</p>
                                        </div>
                                       </div>





                                       <div className="footer__info">
                                       <h3 className="footer__header">
                                       Connect with Us
                                        </h3>
                                        <div className="footer__info">
                                                  <p>Facebook</p>
                                                  <p>Twitter</p>
                                                  <p>Instagram</p>
                                        </div>
                                       </div>


                                       <div className="footer__info">
                                       <h3 className="footer__header">
                                       Make Money with Us
                                        </h3>
                                        <div className="footer__info">
                                                  <p>Sell under Amazon Accelerator</p>
                                                  <p>Amazon Global Selling</p>
                                                  <p>Become an Affiliate</p>
                                                  <p>Fulfilment by Amazon</p>
                                                  <p>Advertise Your Products</p>
                                                  <p>Amazon Pay on Merchants</p>
                                        </div>
                                       </div>


                                       <div className="footer__info">
                                       <h3 className="footer__header">
                                       Let Us Help You
                                        </h3>
                                        <div className="footer__info">
                                                  <p>COVID-19 and Amazon</p>
                                                  <p>Your Account</p>
                                                  <p>Returns Centre</p>
                                                  <p>100% Purchase Protection</p>
                                                  <p>Amazon App Download</p>
                                                  <p>Amazon Assistant Download</p>
                                                  <p>Help</p>
                                        </div>
                                       </div>

                              </div>

                           <div className="footer__overall">
                           <div className="footer__logoAndLan">
                                        <div className="footer__logo">
                                        <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' className='header__logo'/>
                                        </div>
                                        <div className="footer__lan">

                                        <select name="language" id="lan">
                                        {/* <optgroup label="Swedish Cars"> */}
                                       <option value="eng">English</option>
                                          <option value="tam">Tamil</option>
                                              {/* </optgroup> */}
                                       {/* <optgroup label="German Cars"> */}
                                       <option value="hin">Hindi</option>
                                         <option value="kan">Kanadam</option>
                                             {/* </optgroup> */}
                                            </select>

                                        </div>
                              </div>
                           </div>

                           <div className="footer__location">
                                     <p>Australia</p>
                                     <p>Canada</p>
                                     <p>China</p>
                                     <p>German</p>
                                     <p>Poland</p>
                                     <p>Singapoore</p>
                           </div>

                           <div className="footer__copyRight">
                                     <p>© 1996-2021, Amazon.com, Inc. or its affiliates</p>
                           </div>
                    </div>
          )
}

export default Footer




