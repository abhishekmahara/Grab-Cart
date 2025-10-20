import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Carousel = () => {
  const { products, loading, error } = useContext(ProductContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Filter only electronics
  const electronics = products.filter(
    (product) => product.category === "smartphones" || product.category === "laptops" || product.category === "electronics"
  );

   var settings = {
    dots: true,
    autoplay:true,
    autoplaySpeed:2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
     <Slider {...settings}>
      {
        electronics?.slice(0,7)?.map((item,index) =>{
          return <div key={index} className="-z-10">
                    <div className="flex gap-10 justify-center h-[600px] items-center px-4">
                      <div className="space-y-6">
                        <h3 className="  text-gray-800 font-semibold font-varela text-sm">Powering world with best Electronics</h3>
                        <h1 className="text-4xl font-bold uppercase line-clamp-3 md:w-[500px]">{item.title}</h1>
                        <p className="md:w-[500px] line-clamp-3 text-gray-800 pr-7">{item.description}</p>
                        <button className="bg-gradient-to-r from-black to-gray-900 text-white px-3 py-2 rounded-xl cursor-pointer mt-2 ">SHOP NOW</button>
                      </div>
                      <div>
                        <img src={item.images[0]} alt={item.title} className="w-[650px] hover:scale-105 transition-all"/>
                      </div>
                    </div>
          </div>
        })
      }
      <div>
        <h3>1</h3>
      </div>
      
    </Slider>
  );
};

export default Carousel;
