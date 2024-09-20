import React from "react";
import "./product.css";
import popart1 from "../../asset/popart_murukku.jpeg";
import popart2 from "../../asset/popart_namkin.jpeg";
import popart3 from "../../asset/popart_sev.jpeg";
import popart4 from "../../asset/popart_tam.jpeg";
import popart5 from "../../asset/popart_tea.jpeg";
import popart6 from "../../asset/barik-sev.png";
import popart7 from "../../asset/masala-gathiya.png";
import popart8 from "../../asset/masala-sev.png";
import popart9 from "../../asset/pack.jpg";

const Product = () => {
  return (
    <div className="container-product">
      <h2>Discover Categories</h2>
      <div className="product-grid">
        {/* First Card */}
        <div className="card-data">
          <img src={popart1} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">MURUKKU</p>
          </div>
        </div>

        {/* Second Card */}
        <div className="card-data">
          <img src={popart2} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">NAMKEEN</p>
          </div>
        </div>

        {/* Third Card */}
        <div className="card-data">
          <img src={popart3} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">SAV GATHIYA</p>
          </div>
        </div>
        <div className="card-data">
          <img src={popart4} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">TAM TAM MIX</p>
          </div>
        </div>
        <div className="card-data">
          <img src={popart5} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">TEA TIME</p>
          </div>
        </div>

        <div className="card-data">
          <img src={popart8} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">BARIK SEV</p>
          </div>
        </div>
        <div className="card-data">
          <img src={popart1} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">MASALA GATHIYA</p>
          </div>
        </div>
        <div className="card-data">
          <img src={popart4} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">MASALA SEV</p>
          </div>
        </div>
        <div className="card-data">
          <img src={popart2} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">KHATTA MEETHA</p>
          </div>
        </div>
        <div className="card-data">
          <img src={popart2} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">KHATTA MEETHA</p>
          </div>
        </div>
        <div className="card-data">
          <img src={popart1} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">KHATTA MEETHA</p>
          </div>
        </div>
        <div className="card-data">
          <img src={popart8} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">KHATTA MEETHA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
