import { FaPhoneFlip } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import mainLogo from "../../../assets/brands/png-logo.png";

const LogoArea = () => {
  return (
    <section id="logo-area" className="-mt-5">
      <div className="container mx-auto">
        <div className="row flex flex-wrap items-center">
          <div className="col-xl-3 col-lg-2 col-md-2 col-sm-5 col-5">
            <div className="logo-here flex items-center">
              <a href="/">
                <img
                  src={mainLogo}
                  alt="Young Bangla"
                  className="h-32 "
                />
              </a>
            </div>
          </div>
          <div className="hidden lg:flex offset-xl-2 col-xl-7 offset-lg-0 col-lg-9 col-md-10 col-sm-7 col-7 lg:ml-auto ml-5 lg:mb-0 mb-5">
            <div className="row menuright flex justify-end">
              <div className="col-xl-5 col-lg-5 col-md-4 space leftmargin">
                <div className="address-box firstboxs flex items-center mr-10">
                  <div className=" text-blue-500 mr-2 border p-2 rounded-full shadow-2xl">
                    <FaPhoneFlip />
                  </div>
                  <div className="icon-detail">
                    <h3 className="text-base font-semibold">
                      Phone: +88-02-48110547
                    </h3>
                    <p className="text-xs font-bold">Hot Line: +88-02-48110548</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 leftmargin">
                <div className="address-box myicoins flex items-center">
                  <div className=" text-blue-500 mr-2 border p-3 rounded-full shadow-2xl">
                    <TfiEmail />
                  </div>
                  <div className="icon-detail">
                    <h3 className="text-base font-semibold">Email us</h3>
                    <p className="text-xs font-bold">
                      info@youngbanglagroup.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                <div className="address-box adersslastbox">
                  {/* Excluded part as per request */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoArea;
