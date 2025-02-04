import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import strategies from "../../../assets/founder/strategies.jpeg";

const StrategiesSection = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1400,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className="bg-[#9C742A]">
      <div className="flex flex-wrap  ">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 p-4">
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="10"
            data-aos-duration="1400"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="aos-init aos-animate"
          >
            <div className="stat__left p-10">
              <p className="text-lg text-white">
                YOUNG BANGLA MANUFACTURING INDUSTRIES CO. LTD.
              </p>
              <h2 className="text-3xl font-semibold mt-2 text-white">
                The Strategies
              </h2>
              <p className="text-white mt-4">
                Since then it has been progressing with tremendous pace in the
                industrial area of Bangladesh. A large number of people are
                employed by the group and cared for as members of the Akij
                family. The non-profit concerns are also involved in sustaining
                development of the country & for social welfare.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 px-10">
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="10"
            data-aos-duration="1400"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            className="aos-init aos-animate"
          >
            <div className="bckground-div">
              <img
                src={strategies}
                alt="Site Image"
                className="strategies-img w-full h-[20rem] rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategiesSection;
