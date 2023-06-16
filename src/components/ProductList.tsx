import React from "react";
import useFetchProducts from "../hooks/useFetchProducts";
import Product from "./Product";

interface IProduct {
  id: string;
  title: string;
  images: string[];
}

const ProductList: React.FC = () => {
  const { products, error, loading } = useFetchProducts();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-500 text-white text-center py-3 px-6 font-semibold max-w-lg m-auto mt-10 rounded-lg">
        <div>{error}</div>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols- gap-4 my-10">
        {products.slice(0, 5).map((product: IProduct) => (
          <Product {...product} imageUrl={product.images[0]} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
