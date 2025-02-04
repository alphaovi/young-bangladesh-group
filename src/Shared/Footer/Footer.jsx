import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-[#9C742A] text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="row grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Column: Logo and Social Media */}
          <div className="col">
            <div className="first-widget">
              <img
                src="https://i.ibb.co.com/hJycT9bd/3.jpg"
                alt="Young Bangla Manufacturing Industries Co. LTd Logo"
                className="w-72 h-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-bold mb-2">
                <b>YOUNG BANGLA GROUP</b>
              </h3>
              <p className="text-white mb-6">
                The Largest Group of Company in Bangladesh
              </p>
              <div className="footer-social">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-white hover:text-black cursor-pointer"
                  >
                    <i className="fab fa-facebook-f text-2xl"></i>
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-black cursor-pointer"
                  >
                    <i className="fab fa-twitter text-2xl"></i>
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-pink-500 cursor-pointer"
                  >
                    <i className="fab fa-instagram text-2xl"></i>
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-blue-600 cursor-pointer"
                  >
                    <i className="fab fa-linkedin text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Second Column: Contact Us */}
          <div className="col">
            <div className="quick-address">
              <h2 className="text-xl font-bold mb-6">
                <b>Contact Us</b>
              </h2>
              <div className="quick-icon">
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <span className="text-white cursor-pointer">
                      <i className="fas fa-phone"></i>
                    </span>
                    <a className="text-white hover:text-black cursor-pointer">
                      +88-02-48110547
                    </a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-white cursor-pointer">
                      <i className="far fa-envelope"></i>
                    </span>
                    <a className="text-white hover:text-black cursor-pointer">
                      info@youngbanglagroup.com
                    </a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-white cursor-pointer">
                      <i className="fas fa-map-marker-alt"></i>
                    </span>
                    <a className="text-white hover:text-black cursor-pointer">
                      1/1,Block E,Kazi Nazul Islam Road Dhaka In front of Allah
                      Karim Masque,Mohammadpur,Bangladesh
                    </a>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-white cursor-pointer">
                      <i className="far fa-clock"></i>
                    </span>
                  </li>
                </ul>
                <div className="-mt-2 ">
                  <div className="border-t-4 w-[24rem]"></div>
                  <li className="flex  ml-3">
                    <Link className="mt-2">Design and Developer By</Link>
                    <Link
                      to="https://innovativeitsolutionsltd.com/"
                      className="ml-2 transition delay-250 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 hover:text-white text-base mt-1 rounded hover:p-2"
                    >
                      Innovative IT Solutions Ltd.
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>

          {/* Third Column: Important Links */}
          <div className="col">
            <div className="quick-menu-footer">
              <h2 className="text-xl font-bold mb-6">
                <b>Important Links</b>
              </h2>
              <div className="main-last-widget">
                <div className="container">
                  <div className="row grid grid-cols-2 gap-4">
                    <div className="col">
                      <div className="last-first-sec">
                        <ul className="space-y-3">
                          <li>
                            <a
                              href="#"
                              className="text-white hover:text-whit cursor-pointere"
                            >
                              Book
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-white hover:text-whit cursor-pointere"
                            >
                              Survey
                            </a>
                          </li>
                          <li>
                            <a
                              href="/privacy-policy"
                              className="text-white hover:text-whit cursor-pointere"
                            >
                              Privacy Policy
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-white hover:text-whit cursor-pointere"
                            >
                              Terms and Condition
                            </a>
                          </li>
                        </ul>
                        {/* <img
                          src="https://www.akij.net/img/footer-image-3rd.png"
                          alt="Footer Logo"
                          className="footer-third w-32 h-auto mt-6"
                        /> */}
                      </div>
                    </div>
                    <div className="col">
                      <div className="last-first-sec">
                        <ul className="space-y-3">
                          <li>
                            <a
                              href="#"
                              className="text-white hover:text-whit cursor-pointere"
                            >
                              FAQ
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-white hover:text-whit cursor-pointere"
                            >
                              Trust
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-white hover:text-whit cursor-pointere"
                            >
                              Contact Center
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-white hover:text-whit cursor-pointere"
                            >
                              E-Commerce Shop
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
