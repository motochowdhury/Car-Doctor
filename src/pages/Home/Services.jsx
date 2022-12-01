import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GrPlay } from "react-icons/gr";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="text-center space-y-2">
        <h5 className="text-primary font-bold">Services</h5>
        <h1 className="text-5xl font-bold text-black">Our Service Area</h1>
        <p className="text-slate-400">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10">
        {services.map((service) => {
          return (
            <div className="card w-72 bg-base-100 shadow-lg border">
              <figure className="p-4">
                <img
                  src={service.img}
                  alt="Shoes"
                  className="w-full rounded-2xl"
                />
              </figure>
              <div className="card-body py-5">
                <h2 className="card-title">{service.name}</h2>
                <div className="card-actions justify-between">
                  <div className="badge badge-outline">
                    price:{service.price}
                  </div>
                  <div className="badge badge-outline">
                    <Link to={`/checkout/${service?._id}`}>
                      <GrPlay />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
