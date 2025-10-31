import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../Contextt/CartContext';

const SingleProduct = () => {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState("");
  const{addToCart}  = useCart();

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${params.id}`);
      setSingleProduct(res.data);
      
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getSingleProduct(); 
  }, []);

  return (
   
  <>
    {singleProduct ? (
      <div className="text-white flex items-start justify-center gap-10 p-20">
        {/* product image */}
        <div className='bg-white rounded-2xl shadow-2xl'>
            <img src={singleProduct.thumbnail} 
            alt={singleProduct.title} className='w-80 h-auto rounded-xl'/>
        </div>

        {/* product details */}
        <div className='flex flex-col gap-6 w-2/3'>
              <h1 className='text-3xl font-bold'>{singleProduct.title}</h1>
              <div className='text-lg text-gray-300'>{singleProduct.category}</div>
              <p className='text-black'>₹{Math.floor(singleProduct.price * 50).toLocaleString("en-IN")}</p>
              <p className='text-sm text-gray-200'>{singleProduct.description}</p>

              {/* quantity */}
              <div className='flex items-center gap-4'>
                <label htmlFor="quantity" className='text-sm font-medium'>Quantity:</label>
                <input type="number" min={1}  defaultValue={1} className='w-16 text-center bg-white text-black rounded-md py-1 px-2 border-none focus:outline-none focus:ring-2 focus:ring-gray-500' />
              </div>

              <div className='flex gap-4 mt-4'>
                 <button className="bg-gradient-to-r from-black to-gray-800 text-white px-5 py-2 rounded-xl mt-2 hover:scale-105 transition-transform duration-200"
                  onClick={()=> addToCart(SingleProduct)}
                  >
                    Add to Cart
                  </button>
              </div>
        </div>

      
      </div>
    ) : (
      <div>
        <h1>Loading...</h1>
      </div>
    )}
  </>
  );
};

export default SingleProduct;
