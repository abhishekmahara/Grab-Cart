import logo from "../assets/img/gclogo-removebg-preview.png";

const BrandStory = () => {
  return (
    <section className="bg-blue-600 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold tracking-widest uppercase mb-12">
          GrabCart Store for Everyday Shopping <br />
          Convenience, Value & Innovation
        </h2>

        {/* Paragraph 1 */}
        <p className="text-gray-300 leading-relaxed mb-8 text-sm md:text-base">
          Shopping should be simple, fast, and enjoyable. At GrabCart, we bring
          together the best products from trusted brands so you can discover
          everything you need in one place. Whether you're upgrading your tech,
          refreshing your wardrobe, or finding everyday essentials, GrabCart
          makes online shopping seamless.
        </p>

        {/* Paragraph 2 */}
        <p className="text-gray-300 leading-relaxed mb-8 text-sm md:text-base">
          Explore our collections built around quality, affordability, and
          convenience. From electronics and fashion to home essentials and
          lifestyle products, our platform helps you shop smarter and faster
          while enjoying a modern, intuitive experience.
        </p>

        {/* Paragraph 3 */}
        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          GrabCart is more than just an online store — it’s a destination where
          innovation meets everyday shopping. Our mission is to help customers
          find great products, great deals, and a great experience every time
          they visit.
        </p>

        {/* Logo */}
        <div className="flex justify-center mt-16 ">
          <img
            src={logo}
            alt="GrabCart"
            className="h-20"
          />
        </div>

      </div>
    </section>
  );
};

export default BrandStory;