import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const AllYouNeedToKnow = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Global animation duration
      once: false, // Whether animation should happen only once
      mirror: true, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div className="container mx-auto py-16">
      {/* Heading Section */}
      <div className="row">
        <div className="col-12 text-center">
          <p className="text-lg text-gray-600">All you need to know</p>
          <h4 className="text-2xl font-bold text-[#9C742A] mt-2 ">
            About YOUNG BANGLA MANUFACTURING INDUSTRIES CO. LTD.
          </h4>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="row mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
        {/* Since 1950 */}
        <div
          className="col-lg-3 col-6"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="10"
          data-aos-duration="800"
        >
          <div className="ayntn__box text-center p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 border-2 border-[#9C742A] hover:shadow-2xl">
            <img
              src="https://www.akij.net/img/Group_873.svg"
              alt="Achievement"
              className="w-16 h-16 mx-auto"
            />
            <p className="text-gray-600 mt-4">Since</p>
            <h4 className="text-2xl font-bold text-gray-800 mt-2">
              <span>2017</span>
            </h4>
          </div>
        </div>

        {/* Units */}
        <div
          className="col-lg-3 col-6"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="10"
          data-aos-duration="1000"
        >
          <div className="ayntn__box text-center p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 border-2 border-[#9C742A] hover:shadow-2xl">
            <img
              src="https://www.akij.net/img/Group_874.svg"
              alt="Achievement"
              className="w-16 h-16 mx-auto"
            />
            <p className="text-gray-600 mt-4">Units</p>
            <h4 className="text-2xl font-bold text-gray-800 mt-2">
              <span>6</span>
            </h4>
          </div>
        </div>

        {/* Employees */}
        <div
          className="col-lg-3 col-6"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="10"
          data-aos-duration="1200"
        >
          <div className="ayntn__box text-center p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 border-2 border-[#9C742A] hover:shadow-2xl">
            <img
              src="https://www.akij.net/img/Group_875-1.svg"
              alt="Achievement"
              className="w-16 h-16 mx-auto"
            />
            <p className="text-gray-600 mt-4">Employees</p>
            <h4 className="text-2xl font-bold text-gray-800 mt-2 custom__pb">
              <span>994</span>
            </h4>
          </div>
        </div>

        {/* National Achievements */}
        <div
          className="col-lg-3 col-6"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="10"
          data-aos-duration="1400"
        >
          <div className="ayntn__box text-center p-6 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 border-2 border-[#9C742A] hover:shadow-2xl">
            <img
              src="https://www.akij.net/img/Acheivement.png"
              alt="Achievement"
              className="w-16 h-16 mx-auto"
            />
            <p className="text-gray-600 mt-4">National Achievements</p>
            <h4 className="text-2xl font-bold text-gray-800 mt-2">
              <span>5</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllYouNeedToKnow;
