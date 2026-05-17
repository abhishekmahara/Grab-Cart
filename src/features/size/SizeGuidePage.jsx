import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Ruler,
  Shirt,
  Footprints,
} from "lucide-react";

const SizeGuidePage = () => {
  const navigate = useNavigate();

  const clothingSizes = [
    {
      size: "XS",
      chest: "34-36",
      waist: "28-30",
      hip: "34-36",
    },
    {
      size: "S",
      chest: "36-38",
      waist: "30-32",
      hip: "36-38",
    },
    {
      size: "M",
      chest: "38-40",
      waist: "32-34",
      hip: "38-40",
    },
    {
      size: "L",
      chest: "40-42",
      waist: "34-36",
      hip: "40-42",
    },
    {
      size: "XL",
      chest: "42-44",
      waist: "36-38",
      hip: "42-44",
    },
  ];

  const shoeSizes = [
    {
      uk: "6",
      us: "7",
      eu: "40",
      cm: "25",
    },
    {
      uk: "7",
      us: "8",
      eu: "41",
      cm: "26",
    },
    {
      uk: "8",
      us: "9",
      eu: "42",
      cm: "27",
    },
    {
      uk: "9",
      us: "10",
      eu: "43",
      cm: "28",
    },
    {
      uk: "10",
      us: "11",
      eu: "44",
      cm: "29",
    },
  ];

  return (
    <section className="bg-white text-black min-h-screen px-6 lg:px-20 pt-14">

      {/* HEADER */}
      <div className="max-w-5xl mb-20">

        <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-5">
          GrabCart Size Guide
        </p>

        <h1 className="text-5xl md:text-7xl font-black uppercase leading-none mb-2 tracking-tight">
          Find Your
          <br />
          Perfect Fit
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
          Use the charts below to find the right fit
          for clothing and footwear before placing
          your order.
        </p>

      </div>

      {/* TOP INFO CARDS */}
      <div className="grid md:grid-cols-3 gap-0 border border-gray-200 mb-24">

        <div className="p-10 border-b md:border-b-0 md:border-r border-gray-200">

          <Ruler size={30} className="mb-8" />

          <h3 className="text-2xl font-black uppercase mb-4">
            Accurate
            <br />
            Measurements
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Measure chest, waist, hip, and foot
            length accurately for the best fit.
          </p>
        </div>

        <div className="p-10 border-b md:border-b-0 md:border-r border-gray-200">

          <Shirt size={30} className="mb-8" />

          <h3 className="text-2xl font-black uppercase mb-4">
            Clothing
            <br />
            Sizing
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Compare your body measurements with
            our apparel size chart.
          </p>
        </div>

        <div className="p-10">

          <Footprints size={30} className="mb-8" />

          <h3 className="text-2xl font-black uppercase mb-4">
            Footwear
            <br />
            Conversion
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Easily compare UK, US, EU, and CM
            shoe sizing standards.
          </p>
        </div>

      </div>

      {/* CLOTHING SIZE SECTION */}
      <div className="mb-24">

        <div className="mb-10">

          <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-4">
            Apparel Sizes
          </p>

          <h2 className="text-4xl font-black uppercase mb-4">
            Clothing Size Chart
          </h2>

          <p className="text-gray-600">
            Measurements are listed in inches.
          </p>
        </div>

        <div className="overflow-x-auto border border-gray-200">

          <table className="w-full min-w-[700px] border-collapse">

            <thead className="bg-gray-50">

              <tr className="border-b border-gray-200">

                <th className="text-left p-6 uppercase text-sm tracking-widest">
                  Size
                </th>

                <th className="text-left p-6 uppercase text-sm tracking-widest">
                  Chest
                </th>

                <th className="text-left p-6 uppercase text-sm tracking-widest">
                  Waist
                </th>

                <th className="text-left p-6 uppercase text-sm tracking-widest">
                  Hip
                </th>

              </tr>

            </thead>

            <tbody>

              {clothingSizes.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 last:border-none hover:bg-gray-50 transition"
                >

                  <td className="p-6 font-semibold text-lg">
                    {item.size}
                  </td>

                  <td className="p-6 text-gray-600">
                    {item.chest}
                  </td>

                  <td className="p-6 text-gray-600">
                    {item.waist}
                  </td>

                  <td className="p-6 text-gray-600">
                    {item.hip}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>
      </div>

      {/* SHOE SIZE SECTION */}
      <div className="mb-24">

        <div className="mb-10">

          <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-4">
            Footwear Sizes
          </p>

          <h2 className="text-4xl font-black uppercase mb-4">
            Shoe Size Conversion
          </h2>

          <p className="text-gray-600">
            International shoe sizing guide.
          </p>
        </div>

        <div className="overflow-x-auto border border-gray-200">

          <table className="w-full min-w-[600px] border-collapse">

            <thead className="bg-gray-50">

              <tr className="border-b border-gray-200">

                <th className="text-left p-6 uppercase text-sm tracking-widest">
                  UK
                </th>

                <th className="text-left p-6 uppercase text-sm tracking-widest">
                  US
                </th>

                <th className="text-left p-6 uppercase text-sm tracking-widest">
                  EU
                </th>

                <th className="text-left p-6 uppercase text-sm tracking-widest">
                  CM
                </th>

              </tr>

            </thead>

            <tbody>

              {shoeSizes.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 last:border-none hover:bg-gray-50 transition"
                >

                  <td className="p-6 font-semibold text-lg">
                    {item.uk}
                  </td>

                  <td className="p-6 text-gray-600">
                    {item.us}
                  </td>

                  <td className="p-6 text-gray-600">
                    {item.eu}
                  </td>

                  <td className="p-6 text-gray-600">
                    {item.cm}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>
      </div>

      {/* MEASUREMENT GUIDE */}
      <div className="mb-24">

        <div className="mb-10">

          <p className="uppercase tracking-[0.3em] text-xs text-gray-500 mb-4">
            Measurement Tips
          </p>

          <h2 className="text-4xl font-black uppercase">
            How To Measure
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-0 border border-gray-200">

          <div className="p-10 border-b md:border-b-0 md:border-r border-gray-200">

            <h3 className="text-2xl font-black uppercase mb-5">
              Chest
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Measure around the fullest part
              of your chest while keeping the
              tape horizontal.
            </p>
          </div>

          <div className="p-10 border-b md:border-b-0 md:border-r border-gray-200">

            <h3 className="text-2xl font-black uppercase mb-5">
              Waist
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Measure around the narrowest
              part of your waist naturally.
            </p>
          </div>

          <div className="p-10">

            <h3 className="text-2xl font-black uppercase mb-5">
              Foot Length
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Stand straight and measure from
              heel to toe for accurate shoe fit.
            </p>
          </div>

        </div>
      </div>

      {/* SUPPORT SECTION */}
     
<div className="-mx-6 lg:-mx-20 mt-24 bg-black text-white">

  <div className="px-6 lg:px-22 py-20">

    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

      <div>

        <p className="uppercase tracking-[0.3em] text-xs text-blue-400 mb-5 font-medium">
          Need Assistance?
        </p>

        <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.95] mb-6">
          Still Unsure
          <br />
          About Your Size?
        </h2>

        <p className="text-slate-300 max-w-xl leading-relaxed text-lg">
          Contact our support team for sizing
          recommendations before placing your order.
        </p>

      </div>

      <Button
        variant="grabcart"
        onClick={() => navigate("/contact")}
        className="px-10 py-6 uppercase tracking-widest"
      >
        Contact Support
      </Button>

    </div>

  </div>

</div>

    </section>
  );
};

export default SizeGuidePage;