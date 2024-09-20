import React, { useEffect, useRef } from 'react';
import Flickity from 'flickity'; // Import Flickity
import 'flickity/css/flickity.css'; // Import Flickity CSS
import './product_slider.css'; // Your custom CSS
import popart1 from "../../asset/popart_murukku.jpeg";
import popart2 from "../../asset/popart_namkin.jpeg";
import popart3 from "../../asset/popart_sev.jpeg";
import popart4 from "../../asset/popart_tam.jpeg";
import popart5 from "../../asset/popart_tea.jpeg";
import popart6 from "../../asset/barik-sev.png";
import popart7 from "../../asset/masala-gathiya.png";
import popart8 from "../../asset/masala-sev.png";

const ProductSlider = () => {
  const flktyRef = useRef(null); // Create a ref to hold the Flickity instance

  useEffect(() => {
    // Initialize Flickity after the component mounts
    flktyRef.current = new Flickity('#pre-bgg', {
      autoPlay: false, // Disable autoPlay
      wrapAround: true,
      pageDots: false, // Optionally disable page dots
    });

    // Cleanup on unmount
    return () => {
      flktyRef.current.destroy();
    };
  }, []);

  const products = [
    { image: popart1, name: "MURUKKU", price: 300 },
    { image: popart2, name: "NAMKIN", price: 200 },
    { image: popart3, name: "SEV", price: 120 },
    { image: popart4, name: "TAMARIND", price: 139 },
    { image: popart5, name: "TEA", price: 210 },
    { image: popart6, name: "BARIK SEV", price: 810 },
    { image: popart7, name: "MASALA GATHIYA", price: 180 },
    { image: popart8, name: "MASALA SEV", price: 222 },
  ];

  return (
    <div className='slider-container'>
        <h1> Popat's Premium</h1>
      <div id="pre-bgg" className="carousel">
        {products.map((product, index) => (
          <div key={index} className="carousel-cell pre-bag">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>from Rs. {product.price}.00</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;

/* product_slider.css */
