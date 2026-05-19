import React, { useEffect, useRef, useState } from "react";

import { FaSearch } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const SearchBar = () => {

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();
  const searchRef = useRef();

  // FETCH SEARCH RESULTS
  useEffect(() => {

    const fetchSuggestions = async () => {

      if (!query.trim()) {
        setSuggestions([]);
        return;
      }

      try {

        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`
        );

        const data = await res.json();

        setSuggestions(data.products.slice(0, 5));

      } catch (error) {
        console.log(error);
      }
    };

    const debounce = setTimeout(() => {
      fetchSuggestions();
    }, 300);

    return () => clearTimeout(debounce);

  }, [query]);

  // CLOSE DROPDOWN
  useEffect(() => {

    const handleClickOutside = (e) => {

      if (
        searchRef.current &&
        !searchRef.current.contains(e.target)
      ) {
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);

  // SUBMIT SEARCH
  const handleSearch = (e) => {

    e.preventDefault();

    if (query.trim()) {

      navigate(`/products?search=${query}`);

      setSuggestions([]);
    }
  };

  // CLICK PRODUCT
  const handleSuggestionClick = (id) => {

    navigate(`/products/${id}`);

    setSuggestions([]);
    setQuery("");
  };

  return (

    <div className="relative w-full max-w-md" ref={searchRef}>

      {/* SEARCH INPUT */}
      <form
        onSubmit={handleSearch}
        className="flex h-12 items-center border bg-white px-4"
      >

        <FaSearch className="mr-3 shrink-0 text-sm text-black" />

        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="min-w-0 flex-1 bg-white text-sm font-medium text-black placeholder:text-gray-500 outline-none"
        />


      </form>

      {/* SUGGESTIONS */}
      {suggestions.length > 0 && (

        <div className="absolute left-0 top-[49px] z-50 w-full border border-t-0 border-gray-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]">

          <div className="max-h-[420px] overflow-y-auto">

            {suggestions.map((item) => (

              <div
                key={item.id}
                onClick={() => handleSuggestionClick(item.id)}
                className="flex cursor-pointer items-center gap-4 px-4 py-4 transition hover:bg-gray-50"
              >

                {/* IMAGE */}
                <div className="h-20 w-20 shrink-0 overflow-hidden bg-gray-100">

                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />

                </div>

                {/* INFO */}
                <div className="min-w-0 flex-1">

                  <p className="mb-1 text-xs uppercase tracking-wide text-gray-500">
                    {item.category}
                  </p>

                  <h3 className="truncate text-sm font-semibold uppercase text-black">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-black">
                    ${item.price}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      )}

    </div>
  );
};

export default SearchBar;