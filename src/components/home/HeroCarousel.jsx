import { useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import CategorySection from "@/components/home/CategorySection";
import { useNavigate } from "react-router-dom";
import SaleBanner from "./SaleBanner";
import { Button } from "@/components/ui/button";

const HeroCarousel = () => {
  const { products, loading, error } =
    useSelector(
      (state) => state.products,
    );

  const navigate = useNavigate();

  // LOADING
  if (loading)
    return (
      <div className="flex h-[600px] items-center justify-center bg-[#f6f6f6]">
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-transparent border-l-black border-t-gray-500"></div>
      </div>
    );

  // ERROR
  if (error)
    return (
      <p className="py-20 text-center text-red-500">
        {error}
      </p>
    );

  // FILTER PRODUCTS
  const electronics = products.filter(
    (product) =>
      product.category ===
        "smartphones" ||
      product.category === "laptops" ||
      product.category ===
        "electronics",
  );

  // NEXT ARROW
  const NextArrow = ({
    onClick,
  }) => (
    <div
      className="absolute right-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white text-2xl text-black shadow-sm transition hover:bg-black hover:text-white md:flex md:right-8"
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );

  // PREV ARROW
  const PrevArrow = ({
    onClick,
  }) => (
    <div
      className="absolute left-4 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-black/10 bg-white text-2xl text-black shadow-sm transition hover:bg-black hover:text-white md:flex md:left-8"
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );

  // SLIDER SETTINGS
  const settings = {
    autoplay: true,
    autoplaySpeed: 3500,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full overflow-hidden bg-white">
      <SaleBanner />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white">
        <Slider {...settings}>
          {electronics
            .slice(0, 7)
            .map((item, index) => (
              <div key={index}>
                
                <div className="mx-auto flex min-h-[92vh] max-w-7xl flex-col-reverse items-center gap-10 px-6 pb-12 md:grid md:grid-cols-2 md:items-center md:gap-12 md:px-10 lg:px-16">

                  {/* LEFT CONTENT */}
                  <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left">
                    
                    {/* LABEL */}
                    <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-gray-500 sm:text-xs">
                      New Season Collection
                    </p>

                    {/* TITLE */}
                    <h1 className="max-w-[650px] text-3xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-black sm:text-5xl lg:text-7xl">
                      {item.title}
                    </h1>

                    {/* DESCRIPTION */}
                    <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-600 sm:text-base">
                      Designed for everyday
                      style and premium
                      comfort. Discover the
                      latest collection from
                      GrabCart.
                    </p>

                    {/* BUTTON */}
                    <div className="mt-8">
                      <Button
                        variant="grabcart"
                        onClick={() =>
                          navigate(
                            `/products/${item.id}`,
                          )
                        }
                        className="h-11 rounded-none px-8 text-[11px] font-semibold uppercase tracking-[0.25em] sm:h-12 sm:px-10"
                      >
                        Shop Product
                      </Button>
                    </div>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="relative flex items-center justify-center">
                    
                    {/* HUGE BACK TEXT */}
                    <h1 className="absolute top-1/2 hidden -translate-y-1/2 select-none text-[180px] font-black uppercase leading-none tracking-[-0.08em] text-black/[0.04] lg:block">
                      STYLE
                    </h1>

                    {/* IMAGE */}
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="relative z-10 w-[240px] rotate-[-6deg] object-contain transition duration-500 hover:rotate-0 hover:scale-105 sm:w-[340px] md:w-[420px] lg:w-[650px]"
                    />
                  </div>

                </div>
              </div>
            ))}
        </Slider>
      </section>

      <CategorySection />
    </div>
  );
};

export default HeroCarousel;