import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const BrandProducts = () => {
  const products = useLoaderData();
  const len = products.length;
  return (
    <div
      className={`${len}? (grid grid-cols-1 md:grid-cols-2 gap-5 px-5 py-10): (flex justify-center items-center)`}
    >
      {len > 0 ? (
        products.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))
      ) : (
        <h2 className="text-7xl text-center py-20 font-bold font-serif">
          No Product Found...
        </h2>
      )}
    </div>
  );
};

export default BrandProducts;
