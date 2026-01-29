import { getData } from "../Contextt/ProductContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Category from "./Category";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const { products, loading, error } = getData();
  const navigate = useNavigate();

  if (loading)
    return (
      <div className="flex justify-center items-center h-[500px] sm:h-[700px]">
        <div className="w-14 h-14 border-4 border-transparent border-t-blue-500 border-l-blue-400 rounded-full animate-spin"></div>
      </div>
    );

  if (error) return <p className="text-center text-red-500">{error}</p>;

  // Filter only electronics
  const electronics = products.filter(
    (product) =>
      product.category === "smartphones" ||
      product.category === "laptops" ||
      product.category === "electronics"
  );

  // Custom Arrows
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-3xl text-gray-600 hover:text-blue-500 transition"
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-3xl text-gray-600 hover:text-blue-500 transition"
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );

  const settings = {
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full overflow-hidden">
      <Category />
      <div className="relative">
        <Slider {...settings}>
          {electronics.slice(0, 7).map((item, index) => (
            <div key={index} className="px-2 sm:px-4">
              <div
                className="
                flex flex-col-reverse md:flex-row 
                justify-center items-center 
                gap-6 md:gap-10 
                bg-white rounded-2xl shadow-lg 
                px-4 sm:px-8 md:px-12 py-6 sm:py-8
                h-auto md:h-[420px] 
                transition-all duration-300
              "
              >
                {/* Text Section */}
                <div className="text-center md:text-left space-y-4 md:space-y-5 max-w-[550px]">
                  <h3 className="text-gray-700 font-semibold text-xs sm:text-sm uppercase tracking-wide">
                    Powering the World with the Best Electronics
                  </h3>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-gray-900 leading-tight">
                    {item.title}
                  </h1>
                  <p className="text-gray-700 text-sm sm:text-base line-clamp-3">
                    {item.description}
                  </p>
                  <button
                    onClick={() => navigate(`/products/${item.id}`)}
                    className="bg-gradient-to-r from-black to-gray-900 text-white px-5 py-2 rounded-xl cursor-pointer mt-2 hover:scale-105 transition-all"
                  >
                    SHOP NOW
                  </button>
                </div>

                {/* Image Section */}
                <div className="flex justify-center items-center w-full md:w-[400px]">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-[260px] sm:w-[320px] md:w-[400px] h-[200px] sm:h-[250px] object-contain hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
