import contactUs1 from "../../../assets/contact-us/contact1.jpg";
import contactUs2 from "../../../assets/contact-us/contact2.jpg";

const ContactUs = () => {
  return (
    <main id="main" className="site-main">
      {/* Section 1: Address and Map */}
      <section id="image-map" className="mb-8">
        <div className="container-fluid">
          <div className="grid lg:grid-cols-2">
            {/* Left Column - Image */}
            <div className="">
              <img
                src={contactUs1}
                alt="building"
                className="image-map-img w-full h-auto"
              />
            </div>

            {/* Right Column - Address and Map */}
            <div className="col-lg-6 col-12 p-4">
              {/* Address Section */}
              <div className="address mb-6">
                <p className="head__office font-semibold text-lg mb-2">
                  Head Office:
                </p>
                <p className="address text-gray-700 font-semibold">
                  1/1,Block E,Kazi Nazul Islam Road Dhaka
                  <br />
                  In front of Allah Karim Masque,Mohammadpur,Bangladesh
                  <br />
                  Tel: +88-02-48110547, +88-02-48110548
                  <br />
                  Email: info@youngbanglagroup.com
                </p>
              </div>
              <div className="address mb-6">
                <p className="head__office font-semibold text-lg mb-2">
                  Chittagong Office:
                </p>
                <p className="address text-gray-700 font-semibold">
                  Osman Court Building, 3rd Floor, 70, Agrabad C?A, Chittagong
                </p>
              </div>
              <div className="address mb-6">
                <p className="head__office font-semibold text-lg mb-2">
                  Factory
                </p>
                <p className="address text-gray-700 font-semibold">
                  Dharmagonj, P.O : Bhatikoya, P.S : Aminpur
                  <br />
                  Upozila: Bera
                  <br />
                  District : Pabna
                </p>
              </div>

              {/* Map Section */}
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d322.77107482298106!2d90.36180369720306!3d23.756725888676847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5bc450fc35%3A0x71d77e7d3f2d3401!2sDutch-Bangla%20Bank%20Limited%20(DBBL)!5e0!3m2!1sen!2sbd!4v1738413688308!5m2!1sen!2sbd"
                  width="600"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dutch-Bangla Bank Limited Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Contact Form */}
      <section id="image-map" className="mb-8">
        <div className="container-fluid image-form res__contact">
          <div className="grid lg:grid-cols-2">
            {/* Left Column - Contact Form */}
            <div className="col-lg-6 col-12 m-0 p-4">
              <div className="form-div bg-white p-6 rounded-lg shadow-md">
                <div className="heading mb-6">
                  <h3 className="text-2xl font-semibold mb-2">Contact Form</h3>
                  <p className="text-gray-600">
                    Send your message to us and get your query
                  </p>
                </div>

                {/* Form Fields */}
                <input
                  className="form-control w-full p-2 mb-4 border border-gray-300 rounded"
                  type="text"
                  placeholder="Last Name"
                />
                <input
                  className="form-control w-full p-2 mb-4 border border-gray-300 rounded"
                  type="text"
                  placeholder="Email"
                />
                <select className="form-control w-full p-2 mb-4 border border-gray-300 rounded">
                  <option>Select an option</option>
                  <option>Young Bangla Manufacturing Industries Co. Ltd</option>
                  <option>Tawaaf Aviation Services Ltd.</option>
                  <option>The Kids Park</option>
                  <option>Evulation Motors</option>
                  <option>Desh Trade</option>
                  <option>F.V Enterprise</option>
                </select>
                <textarea
                  className="form-control w-full p-2 mb-4 border border-gray-300 rounded"
                  placeholder="Message"
                  rows="4"
                ></textarea>
                <input
                  className="form-control rounded-full p-3 bg-gradient-to-r from-[#9C742A] to-[#f1b442] text-white cursor-pointer hover:bg-blue-700"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="col-lg-6 col-12 p-0 m-0 mt-20">
              <img
                src={contactUs2}
                alt="building"
                className="image-map-img w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
