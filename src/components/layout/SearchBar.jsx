import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

  const [query, setQuery] = useState("");

  const [suggestions, setSuggestions] =
    useState([]);

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

  // CLOSE DROPDOWN ON OUTSIDE CLICK
  useEffect(() => {

    const handleClickOutside = (e) => {

      if (
        searchRef.current &&
        !searchRef.current.contains(e.target)
      ) {
        setSuggestions([]);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

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

      navigate(
        `/products?search=${query}`
      );

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

    <div
      className="relative w-full"
      ref={searchRef}
    >

      {/* SEARCH INPUT */}
      <form
        onSubmit={handleSearch}
        className="flex h-10 items-center bg-gray-100 px-3"
      >

        <FaSearch className="mr-2 shrink-0 text-gray-500" />

        <input
          type="text"
          placeholder="Search products"
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
          className="min-w-0 flex-1 bg-transparent text-sm outline-none"
        />

      </form>

      {/* SUGGESTIONS */}
      {suggestions.length > 0 && (

        <div className="absolute left-0 top-12 z-50 w-full overflow-hidden border border-gray-200 bg-white shadow-xl">

          {suggestions.map((item) => (

            <div
              key={item.id}
              onClick={() =>
                handleSuggestionClick(item.id)
              }
              className="flex cursor-pointer items-center gap-3 border-b border-gray-100 px-3 py-3 transition hover:bg-gray-50"
            >

              {/* IMAGE */}
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-12 w-12 rounded object-cover"
              />

              {/* INFO */}
              <div className="min-w-0 flex-1">

                <h3 className="truncate text-sm font-medium text-black">

                  {item.title}

                </h3>

                <p className="text-xs text-gray-500">

                  {item.category}

                </p>

              </div>

              {/* PRICE */}
              <p className="text-sm font-semibold text-black">

                ${item.price}

              </p>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default SearchBar;