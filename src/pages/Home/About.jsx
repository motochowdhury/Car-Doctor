import React from "react";
import parts from "../../assets/images/about_us/parts.jpg";
import person from "../../assets/images/about_us/person.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen space-y-4">
      <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="relative">
          <img src={person} alt="" className="w-[80%] rounded-lg" />
          <img
            src={parts}
            className="w-1/2 rounded-lg shadow-2xl absolute -bottom-8 -right-0 border-4 border-white"
            alt=""
          />
        </div>
        <div className="w-[80%] mx-auto">
          <div className="space-y-4">
            <h5 className="text-primary font-bold">About Us</h5>
          </div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
