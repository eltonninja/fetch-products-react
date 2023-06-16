import React from "react";

interface IProductProps {
  id: string;
  title: string;
  imageUrl: string;
}

const Product: React.FC<IProductProps> = ({ id, title, imageUrl }) => (
  <div
    key={id}
    className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto"
  >
    <img
      alt={title}
      src={imageUrl}
      className="w-full h-64 object-cover object-center"
    />
    <div className="bg-white p-3">
      <h3 className="text-md text-gray-900 font-semibold capitalize mb-2">
        {title}
      </h3>
    </div>
  </div>
);

export default Product;
