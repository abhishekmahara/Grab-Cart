
import { getData } from "../Context/ProductContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Category from "./Category";


const Carousel = () => {
  const { products, loading, error } = getData()

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Filter only electronics
  const electronics = products.filter(
    (product) => product.category === "smartphones" || product.category === "laptops" || product.category === "electronics"
  );

  const NextArrow =({onClick})=>(
    <div className="absolute right-4 top-50 z-10 cursor-pointer text-3xl text-gray-700 hover:text-white" 
    onClick={onClick}>
    <IoIosArrowForward />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-4 top-50 z-10 cursor-pointer text-3xl text-gray-700 hover:text-white"
    onClick={onClick}
  >
    <IoIosArrowBack />
  </div>
);

   var settings = {
  
    autoplay:true,
    autoplaySpeed:2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover:false,
    nextArrow:<NextArrow />,
    prevArrow:<PrevArrow />,

  };

  return (
   <div>
    <Category/>
     <Slider {...settings}>
      {
        electronics?.slice(0,7)?.map((item,index) =>{
          return <div key={index} className="-z-10 h-[450px] p-3">
                    <div className="flex gap-10 justify-center h-[400px] items-center rounded-2xl bg-white">
                      <div className="space-y-6">
                        <h3 className="  text-gray-800 font-semibold font-varela text-sm">Powering world with best Electronics</h3>
                        <h1 className="text-4xl font-bold uppercase line-clamp-3 md:w-[500px]">{item.title}</h1>
                        <p className="md:w-[500px] line-clamp-3 text-gray-800 pr-7">{item.description}</p>
                        <button className="bg-gradient-to-r from-black to-gray-900 text-white px-3 py-2 rounded-xl cursor-pointer mt-2 ">SHOP NOW</button>
                      </div>
                      <div>
                        <img src={item.images[0]} alt={item.title} className="w-[400px] contai hover:scale-105 transition-all"/>
                      </div>
                    </div>
          </div>
        })
      }
     
      
    </Slider>
    </div>
  );
};

export default Carousel;
