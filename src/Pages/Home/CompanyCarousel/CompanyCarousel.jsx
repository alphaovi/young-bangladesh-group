import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useCompanyData from "../../../Hooks/useCompanyData";
import { useNavigate } from "react-router-dom";

const CompanyCarousel = () => {

  const [companyDatas] = useCompanyData();
  const navigate = useNavigate();

  // Slick Carousel settings
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For screens smaller than 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleCompanyRedirect = (id) => {
    navigate(`each-company-details/${id}`)
  }
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {companyDatas.map((company, index) => (
            <div onClick={() => handleCompanyRedirect(company._id)} key={index} className="px-2 cursor-pointer">
              <div className="company-profile-div bg-white shadow-lg rounded-lg overflow-hidden text-center p-4 h-56">
                <div className="company-profile-img">
                  <img
                    src={company.logo}
                    alt={company.companyName}
                    className="w-96 h-32 mx-auto object-contain "
                  />
                </div>
                <p className="text-lg font-semibold mt-4">
                  {company.companyName}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CompanyCarousel;
