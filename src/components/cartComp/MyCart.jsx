import CartCard from "./CartCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const MyCart = () => {
  const [count, setCount] = useState(0);
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(
      `https://brand-shop-server-side-b8a10.vercel.app/my-cart?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data?.success === false ? null : data.cart);
      });
  }, [user, count]);
  return (
    <div>
      {product ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 py-10">
          {product.map((prod) => (
            <CartCard key={prod} setCount={setCount} prod={prod}></CartCard>
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

export default MyCart;
