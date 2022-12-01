import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);

  console.log(products._id);
  return (
    <div className="mt-10">
      <div className="text-center space-y-2">
        <h5 className="text-primary font-bold">Popular products</h5>
        <h1 className="text-5xl font-bold text-black">Browse Our Products</h1>
        <p className="text-slate-400">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10">
        {products.map((product) => {
          return (
            <div className="card w-72 bg-base-100 shadow-lg border">
              <figure className="p-4">
                <img
                  src={product.img}
                  alt="Shoes"
                  className="w-full rounded-2xl bg-slate-300"
                />
              </figure>
              <div className="card-body py-5">
                <h2 className="text-black font-semibold text-xl text-center">
                  {product.name}
                </h2>
                <div className="card-actions justify-center">
                  <div className="text-primary text-center font-bold">
                    price:{product.price}
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

export default Products;
