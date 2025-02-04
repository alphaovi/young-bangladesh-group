import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import founderImage from "../../../assets/founder/Founder-image.jpg";

const FounderSection = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // Global animation duration
      once: false, // Whether animation should happen only once
      mirror: true, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div className="founder-image-div py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Use flex for layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Founder Image Section */}
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="10"
            data-aos-duration="1400"
          >
            <div className="founder__img__anime relative">
              {/* Founder Image */}
              <div className="card overflow-hidden rounded-lg shadow-lg">
                <div className="founderImage-parent relative">
                  <div className="founderImage-child">
                    <img
                      src={founderImage}
                      alt="Founder Image"
                      className="f-image w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              {/* Overlay Image */}
              <div className="image-div absolute right-3 bottom-5">
                <img
                  src="https://i.ibb.co.com/hJycT9bd/3.jpg"
                  alt="Company Logo"
                  className="founder-home-page-image w-32 h-32 lg:w-60 lg:h-16 shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Founder Text Section */}
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="10"
            data-aos-duration="1400"
          >
            <div className="founder__pt">
              <h4 className="founder-heading text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                One of the biggest conglomerates in Bangladesh.
              </h4>
              <p className="founder-p text-gray-600 text-lg leading-relaxed mb-6">
                The legacy of YOUNG BANGLA MANUFACTURING INDUSTRIES CO. LTD. is
                over half a century old and over the years Young Bangla
                Manufacturing Industries Co. LTd has established itself as the
                full of confidence and much revered industrial family of
                Bangladesh. It consists of 24 big concerns with diverse
                activities &amp; different products.{" "}
                <span className="make-inline font-semibold">
                  YOUNG BANGLA MANUFACTURING INDUSTRIES CO. LTD. launched its
                  venture as a small jute trader more than 50 years ago.
                </span>
              </p>
              <a
                href="founder.html"
                className="all-news-eve-button-a inline-block bg-gradient-to-r from-[#9C742A] to-[#e2aa42] text-white px-6 py-3 transition-colors duration-300 rounded-full"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
