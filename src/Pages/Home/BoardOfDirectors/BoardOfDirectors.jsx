import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import directorsBackgroundImage from "../../../assets/images/product.jpg";
import managementOne from "../../../assets/management/WhatsApp Image 2025-02-01 at 8.07.06 PM.jpeg";
import managementTwo from "../../../assets/management/WhatsApp Image 2025-02-01 at 7.54.44 PM.jpeg";

const BoardOfDirectors = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Data for directors
  const directors = [
    {
      id: 1,
      name: "Miraj Mohammad Tarequl Hasan",
      role: "Managing Director",
      image: managementOne,
    },
    {
      id: 2,
      name: "Jamil Ahmed",
      role: "Director",
      image: managementTwo,
    },
    
  ];

  return (
    <section
      id="bordOfCorporateDirectories"
      className="py-12"
      style={{
        backgroundImage: `url(${directorsBackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4">
        <h4 className="text-3xl font-bold text-center mb-8 text-white">
          Board Of Corporate Directors
        </h4>
        <Slider {...settings}>
          {directors.map((director) => (
            <div key={director.id} className="px-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="text-center p-4">
                  <img
                    src={director.image}
                    alt={director.name}
                    className="w-32 h-32 mx-auto rounded-full object-cover border border-yellow-500 p-1"
                  />
                </div>
                <div className="p-6 text-center">
                  <h2 className="text-xl font-bold">{director.name}</h2>
                  <h4 className="text-lg text-gray-600">{director.role}</h4>
                  <p className="text-gray-500">
                    YOUNG BANGLA MANUFACTURING INDUSTRIES CO. LTD.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BoardOfDirectors;
