import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "./add.css"; // Your custom styles
import { CiUser, CiHeart } from "react-icons/ci";
import popart1 from "../../asset/popart_murukku.jpeg";
import popart2 from "../../asset/popart_namkin.jpeg";
import popart3 from "../../asset/popart_sev.jpeg";
import popart4 from "../../asset/popart_tam.jpeg";
import popart5 from "../../asset/popart_tea.jpeg";
import popart6 from "../../asset/barik-sev.png";
import popart7 from "../../asset/masala-gathiya.png";
import popart8 from "../../asset/masala-sev.png";
import popart9 from "../../asset/pack.jpg";

const AddCard = () => {
  const products = [
    { image: popart1, name: "MURUKKU", price: 300 },
    { image: popart2, name: "NAMKIN", price: 200 },
    { image: popart3, name: "SEV", price: 120 },
    { image: popart4, name: "TAMARIND", price: 139 },
    { image: popart5, name: "TEA", price: 210 },
    { image: popart6, name: "BARIK SEV", price: 810 },
    { image: popart7, name: "MASALA GATHIYA", price: 180 },
    { image: popart8, name: "MASALA SEV", price: 222 },
    // { image: popart9, name: "PACKED SNACK", price: 328 },
    
  ];

  return (
    <>
    <h2>Bestsellers</h2>
    
    <div className="container-slider">
        
        {products.map((product, index) => (
          <div key={index} className="card-container">
            <div>
              <div>
                <CiHeart className="icons"  />{" "}
              </div>
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
            </div>
  
            <div className="card-body">
              <p className="card-text">{product.name}</p>
              <p className="card-price">₹{product.price}</p>{" "}
              {/* Updated price format */}
              <button className="btn btn-primary">ADD TO CART</button>
            </div>
          </div>
        ))}
      </div>
    </>
   
  );
};

export default AddCard;
