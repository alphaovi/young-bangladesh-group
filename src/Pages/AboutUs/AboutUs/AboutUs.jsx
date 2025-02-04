import aboutPhoto from "../../../assets/gallery/3.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className="container pt-5 mv__display">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Side - Image */}
          <div className="mv-image-div mx-10">
            <img src={aboutPhoto} alt="Mission and Vision" className="w-full" />
          </div>

          {/* Right Side - Text */}
          <div className="px-20">
            <h4 className="mv__heading text-3xl font-bold ">
              About Young Bangla Manufacturing Industries Co. LTd
            </h4>
            <p className="lh mt-3">
              Young Bangla Manufacturing Industries Co. Ltd. is the leading
              manufacturing, export, import and supply oriented company ensuring
              smooth and easy services for all our valued customers by a team of
              qualified personnel with extensive knowledge of the products. It
              functions to ease Import and Export regulations and paperwork in
              record time for all of your shipments. We handle all your trade
              compliance and procedures with high efficiency
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
