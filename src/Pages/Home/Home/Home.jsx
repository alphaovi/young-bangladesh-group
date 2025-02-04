import Products from "../../Products/Products/Products";
import Achievements from "../Achievement/Achievements";
import AllYouNeedToKnow from "../AllYouNeedToKnow/AllYouNeedToKnow";
import BoardOfDirectors from "../BoardOfDirectors/BoardOfDirectors";
import CompanyCarousel from "../CompanyCarousel/CompanyCarousel";

import CompanyProfile from "../CompanyProfile/CompanyProfile";
import FounderSection from "../FounderSection/FoundedSection";
import HomeTopSlider from "../HomeTopSlider/HomeTopSlider";
import NewsAndEvents from "../NewsAndEvents/NewsAndEvents";
import Newsletter from "../NewsLetter/NewsLetter";
import OurProducts from "../OurProducts/OurProducts";
// import StrategiesSection from "../StrategiesSection/StrategiesSection";

const Home = () => {
  return (
    <div>
      <HomeTopSlider></HomeTopSlider>
      <AllYouNeedToKnow></AllYouNeedToKnow>
      <FounderSection></FounderSection>
      <CompanyProfile></CompanyProfile>
      <CompanyCarousel></CompanyCarousel>
      {/* <StrategiesSection></StrategiesSection> */}
      <OurProducts></OurProducts>
      <Products></Products>
      <BoardOfDirectors></BoardOfDirectors>
      <Achievements></Achievements>
      <NewsAndEvents></NewsAndEvents>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
