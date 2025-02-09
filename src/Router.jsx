import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeOne from "./components/HomeOne/index.jsx";
import HomeOneRtl from "./components/HomeOne/indexRtl.jsx";
import HomeDarkOne from "./components/HomeOneDark/index-dark.jsx";
import HomeTwo from "./components/HomeTwo/index.jsx";
import HomeTwoRtl from "./components/HomeTwo/indexRtl.jsx";
import HomeDarkTwo from "./components/HomeTwoDark/index-dark.jsx";
import HomeThree from "./components/HomeThree/index.jsx";
import HomeThreeRtl from "./components/HomeThree/indexRtl.jsx";
import HomeDarkThree from "./components/HomeThreeDark/index-dark.jsx"; 
import HomeFour from "./components/HomeFour/index.jsx";
import HomeFourRtl from "./components/HomeFour/indexRtl.jsx";
import HomeDarkFour from "./components/HomeFourDark/index-dark.jsx";
import HomeFive from "./components/HomeFive/index.jsx";
import HomeFiveRtl from "./components/HomeFive/indexRtl.jsx";
import HomeDarkFive from "./components/HomeFiveDark/index-dark.jsx";
import AboutUs from "./components/AboutUs/index.jsx";
import PageServices from "./components/PageServices/index.jsx";
import ServicesDetails from "./components/PageServices/ServicesDetails.jsx";
import ProjectPages from "./components/ProjectPages/index.jsx";
import ProjectDetailsPages from "./components/ProjectPages/ProjectDetails.jsx";
import Team from "./components/TeamPages/index.jsx";
import TeamDetails from "./components/TeamPages/TeamDetails.jsx";
import Testimonial from "./components/TestimonialPages/Testimonial.jsx";
import Faq from "./components/FaqPages/Faq.jsx";
import Gallery from "./components/GalleryPage/Gallery.jsx";
import Products from "./components/ShopPages/Products.jsx";
import ProductsSidebar from "./components/ShopPages/ProductsSidebar.jsx";
import ProductsDetails from "./components/ShopPages/ProductsDetails.jsx";
import Checkout from "./components/ShopPages/Checkout.jsx";
import Cart from "./components/ShopPages/Cart.jsx"
import NewsGrid from "./components/NewsPages/index.jsx";
import NewsDetails from "./components/NewsPages/NewsDetails.jsx";
import Contact from "./components/ContactPages/Contact.jsx";
import ContactV1 from "./components/ContactV1/index.jsx";
import ContactDark from "./components/ContactDark/index.jsx";
import Layout from "./components/Helper/Layout.jsx";
import Error from "./components/ErrorPages/Error.jsx";



const router = createBrowserRouter([
  {
    path:'/',
    Component:Layout,
    children:[
      {
        index:true,
        element: <HomeOne />
      },
      {
        path: "/index-2",
        element: <HomeTwo />
      },
      {
        path: "/index-3",
        element: <HomeThree />
      },
      {
        path: "/index-4",
        element: <HomeFour />
      },
      {
        path: "/index-5",
        element: <HomeFive />
      },
      {
        path: "/index-1-rtl",
        element: <HomeOneRtl />
      },
      {
        path: "/index-2-rtl",
        element: <HomeTwoRtl />
      },
      {
        path: "/index-3-rtl",
        element: <HomeThreeRtl />
      },
      {
        path: "/index-4-rtl",
        element: <HomeFourRtl />
      },
      {
        path: "/index-5-rtl",
        element: <HomeFiveRtl />
      },
      {
        path: "/home-dark-one",
        element: <HomeDarkOne />
      },
      {
        path: "/home-dark-two",
        element: <HomeDarkTwo />
      },
      {
        path: "/home-dark-three",
        element: <HomeDarkThree />
      },
      {
        path: "/home-dark-four",
        element: <HomeDarkFour />
      },
      {
        path: "/home-dark-five",
        element: <HomeDarkFive />
      },
      {
        path: "/page-about",
        element: <AboutUs />
      },
      {
        path: "/page-services",
        element: <PageServices />
      },
      {
        path: "/page-service-details",
        element: <ServicesDetails />
      },
      {
        path: "/contact-v1",
        element: <ContactV1 />
      },
      {
        path: "/contact-dark",
        element: <ContactDark />
      },
      {
        path: "/page-projects",
        element: <ProjectPages />
      },
      {
        path: "/page-project-details",
        element: <ProjectDetailsPages />
      },
      {
        path: "/page-team",
        element: <Team />
      },
      {
        path: "/page-team-details",
        element: <TeamDetails />
      },
       {
        path: "/page-testimonial",
        element: <Testimonial />
      },
      {
        path: "/page-faq",
        element: <Faq />
      },
      {
        path: "/page-gallery",
        element: <Gallery />
      },
      {
        path: "/shop-products",
        element: <Products />
      },
      {
        path: "/shop-products-sidebar",
        element: <ProductsSidebar />
      },
      {
        path: "/shop-product-details",
        element: <ProductsDetails />
      },
      {
        path: "/shop-checkout",
        element: <Checkout />
      },
      {
        path: "/shop-cart",
        element: <Cart />
      },
      {
        path: "/news-grid",
        element: <NewsGrid />
      },
      {
        path: "/news-details",
        element: <NewsDetails />
      },
      {
        path: "/page-contact",
        element: <Contact />
      },
      {
        path: "*",
        element: <Error />
      },
    ]
  }
]);

function Router() {
  return (
      <>
        <RouterProvider router={router} />
      </>
  );
}

export default Router;
