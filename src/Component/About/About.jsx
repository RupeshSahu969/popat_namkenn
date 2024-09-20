import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
    <h1 className="hedingh1">About Us</h1>
    <div className="container-about">
      
      <div className="about-content">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur,
          fugiat expedita, voluptatem enim nisi recusandae quibusdam consectetur
          non dolorem labore corporis autem temporibus, praesentium fugit cumque
          eveniet tempora amet reprehenderit.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur,
          fugiat expedita, voluptatem enim nisi recusandae quibusdam consectetur
          non dolorem labore corporis autem temporibus, praesentium fugit cumque
          eveniet tempora amet reprehenderit.
        </p>
      </div>
      <div className="about-video">
        <iframe
          src="https://www.youtube.com/embed/KHqdvNrqbk8"
          title="About Us Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    </>
    
  );
};

export default About;
