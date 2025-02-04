import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ChairmanMessage from "../Pages/AboutUs/ChairmanMessage/ChairmanMessage/ChairmanMessage";
import MissionVision from "../Pages/AboutUs/MissionVision/MissionVision";
import OurCompanies from "../Pages/OurCompanies/OurCompanies/OurCompanies";
import ContactUs from "../Pages/ContactUs/ContactUs/ContactUs";
import Products from "../Pages/Products/Products/Products";
import NewsAndEvents from "../Pages/Home/NewsAndEvents/NewsAndEvents";
import AboutUs from "../Pages/AboutUs/AboutUs/AboutUs";
import Gallery from "../Pages/Gallery/Gallery/Gallery";
import EachCompanyDetail from "../Pages/OurCompanies/OurCompanies/EachCompanyDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/managing-director-message",
        element: <ChairmanMessage></ChairmanMessage>
      },
      {
        path: "/mission-vision",
        element: <MissionVision></MissionVision>
      },
      {
        path: "/our-companies",
        element: <OurCompanies></OurCompanies>
      },
      {
        path: `/each-company-details/:id`,
        element: <EachCompanyDetail></EachCompanyDetail>
      },
      {
        path: "/products",
        element: <Products></Products>
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>
      },
      {
        path: "/news-event",
        element: <NewsAndEvents></NewsAndEvents>
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>
      },
    ],
  },
]);

export default router;
