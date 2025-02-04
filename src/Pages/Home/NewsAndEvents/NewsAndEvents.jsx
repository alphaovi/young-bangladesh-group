import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const NewsAndEvents = () => {
  const newsData = [
    {
      id: 1,
      image:
        "https://i.ibb.co.com/PZCSSLVD/e82334b0361ed6ff43559b7fad17f027.webp",
      title: "How to buy active carbon",
      date: "Posted in December 11, 2019",
    },
    {
      id: 2,
      image:
        "https://i.ibb.co.com/PZwmgvFL/7585409722cf3815c3d35b2cd820e511.jpg",
      title: "About activate carbon price",
      date: "Posted in December 11, 2019",
    },
    {
      id: 3,
      image:
        "https://i.ibb.co.com/65HyxT6/671c85b416fe06804281bfb03a071c6a.webp",
      title: "Activate Charcoal in gold recovery",
      date: "Posted in December 11, 2019",
    },
    {
      id: 4,
      image:
        "https://i.ibb.co.com/ZpLCchRp/d1e67d96927f1b6bdf2527f6f97a2879.webp",
      title: "Carbon Signs Water Treatment contacts",
      date: "Posted in December 11, 2019",
    },
  ];

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
          slidesToShow: 2,
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
    ],
  };

  return (
    <div className="news-event-container bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="row">
          <div className="col-12 text-center">
            <h4 className="news__events__heading text-3xl font-bold mb-8">
              News & Events
            </h4>
          </div>
        </div>

        {/* News Cards Carousel */}
        <div className="row">
          <div className="col-lg-12 px-10">
            <Slider {...settings}>
              {newsData.map((news) => (
                <div key={news.id} className="px-4 h-72 w-72">
                  <div className="card bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="news-parent">
                      <div className="news-child">
                        <img
                          src={news.image}
                          alt="News and Events"
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    </div>
                    <div className="card-body p-6">
                      <p className="text-lg font-semibold mb-2">{news.title}</p>
                      <p className="text-sm text-blue-500">{news.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* All News & Events Button */}
        <div className="row news__btn mt-8">
          <div className="col-12 text-center">
            <Link
              to={"/news-event"}
              className="all-news-eve-button-a inline-block bg-gradient-to-r from-[#9C742A] to-[#e0a942] text-white px-6 py-3 hover:bg-blue-700 transition duration-300 rounded-full"
            >
              All News & Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndEvents;
