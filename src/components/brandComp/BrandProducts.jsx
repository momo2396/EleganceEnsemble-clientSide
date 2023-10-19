import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import AdSlider from "./AdSlider";

const BrandProducts = () => {
  const products = useLoaderData();
  const len = products.length;
  return (
    <div>
      <AdSlider></AdSlider>
      {len > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 py-10">
          {products.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      ) : (
        <h2 className="max-w-[1440px] mx-auto text-7xl text-center py-20 font-bold font-serif">
          No Product Found...
        </h2>
      )}
    </div>
  );
};

export default BrandProducts;
