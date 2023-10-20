import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const CartCard = ({ prod, setCount }) => {
  const { user } = useContext(AuthContext);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(
      `https://brand-shop-server-side-b8a10.vercel.app/single-product?id=${prod}`
    )
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Delete",
      denyButtonText: `Cancel`,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await fetch(
          `https://brand-shop-server-side-b8a10.vercel.app/delete-from-cart?id=${id}&email=${user?.email}`,
          {
            method: "DELETE",
          }
        );
        const data = await res.json();
        Swal.fire({
          title: "Success!",
          text: data.message,
          icon: "success",
          confirmButtonText: "Cool",
        });
        setCount((prev) => prev + 1);
      } else if (result.isDenied) {
        Swal.fire("Deletion Canceled", "", "info");
      }
    });
  };
  return (
    <div className="px-3 py-5 card lg:card-side bg-[#ac9ed5] shadow-xl">
      <figure>
        <img className="w-fit h-56" src={product?.image} />
      </figure>
      <div className="text-[#ffe5de] card-body flex flex-col gap-3 justify-center items-center font-serif">
        <h2 className="text-4xl ">{product?.name}</h2>
        <p className="text-lg">
          Brand of Product: <span className="font-bold">{product?.brand}</span>
        </p>
        <p className="text-lg">
          Costemic Type: <span className="font-bold">{product?.type}</span>
        </p>
        <p className="text-lg">
          Price of Product: <span className="font-bold">{product?.price}</span>
        </p>
        <p className="text-lg">
          Rating of Product:{" "}
          <span className="font-bold">{product?.rating}.00</span>
        </p>
        <button onClick={() => handleDelete(prod)} className="btn btn-primary">
          Delete Product
        </button>
      </div>
    </div>
  );
};

export default CartCard;
