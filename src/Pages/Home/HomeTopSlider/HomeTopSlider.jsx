import bannerImage1 from "../../../assets/banner-image/banner1.jpg";
import bannerImage2 from "../../../assets/banner-image/banner2.jpg";
import bannerImage3 from "../../../assets/banner-image/banner3.jpg";

const HomeTopSlider = () => {
  return (
    <div className="carousel w-full ">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img src={bannerImage1} className="w-full" alt="Banner 1" />
        {/* Text in the middle of the photo */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {/* <h3 className="text-white text-2xl font-bold uppercase mb-4">
          Young Bangla Manufacturing Industries Co. LTd
          </h3>
          <h4 className="text-white font-semibold mb-4">
            THE LARGEST GROUP OF COMPANY IN BANGLADESH
          </h4>
          <h4 className="text-white  max-w-2xl">
            YOUNG BANGLA MANUFACTURING INDUSTRIES CO. LTD. is one of the largest
            Bangladeshi industrial conglomerates. The industries under this
            conglomerate include textiles, tobacco, food & beverage, cement,
            ceramics, printing and packaging, pharmaceuticals, consumer
          </h4> */}
        </div>
        {/* Navigation Arrows */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src={bannerImage2} className="w-full" alt="Banner 2" />
        {/* Text in the middle of the photo */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {/* <h3 className="text-white text-2xl font-bold uppercase mb-4">
          Young Bangla Manufacturing Industries Co. LTd
          </h3>
          <h4 className="text-white font-semibold mb-4">
            THE LARGEST GROUP OF COMPANY IN BANGLADESH
          </h4>
          <h4 className="text-white  max-w-2xl">
            YOUNG BANGLA MANUFACTURING INDUSTRIES CO. LTD. is one of the largest
            Bangladeshi industrial conglomerates. The industries under this
            conglomerate include textiles, tobacco, food & beverage, cement,
            ceramics, printing and packaging, pharmaceuticals, consumer
          </h4> */}
          {/* <button className="btn btn-outline text-white mt-5 rounded-full hover:bg-white hover:text-[#1662DC]">
            Open Companies
          </button> */}
        </div>
        {/* Navigation Arrows */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src={bannerImage3} className="w-full" alt="Banner 2" />
        {/* Text in the middle of the photo */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {/* <h3 className="text-white text-2xl font-bold uppercase mb-4">
          Young Bangla Manufacturing Industries Co. LTd
          </h3>
          <h4 className="text-white font-semibold mb-4">
            THE LARGEST GROUP OF COMPANY IN BANGLADESH
          </h4>
          <h4 className="text-white  max-w-2xl">
            YOUNG BANGLA MANUFACTURING INDUSTRIES CO. LTD. is one of the largest
            Bangladeshi industrial conglomerates. The industries under this
            conglomerate include textiles, tobacco, food & beverage, cement,
            ceramics, printing and packaging, pharmaceuticals, consumer
          </h4> */}
          {/* <button className="btn btn-outline text-white mt-5 rounded-full hover:bg-white hover:text-[#1662DC]">
            Open Companies
          </button> */}
        </div>
        {/* Navigation Arrows */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeTopSlider;
