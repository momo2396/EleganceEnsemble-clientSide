import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Details = () => {
  const product = useLoaderData();
  const { _id, name, image, price, brand, type, rating, details } = product;
  const { user } = useContext(AuthContext);
  const handleAddtoCart = async (_id) => {
    const res = await fetch(
      `http://localhost:5000/add-to-cart?email=${user.email}&id=${_id}`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await res.json();
    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: data.message,
        icon: "success",
        confirmButtonText: "Cool",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: data.message,
        icon: "error",
        confirmButtonText: "Close",
      });
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-5 py-20">
      <div className=" p-5 bg-[#ffe5de]">
        <img className="w-full h-full" src={image}></img>
        <div className="flex flex-col gap-4 text-white font-serif bg-[#c6bde0] mt-5 py-10  p-5">
          <h2 className="text-7xl">{name}</h2>
          <p>{details}</p>
          <p className="text-lg">
            Brand of Product: <span className="font-bold">{brand}</span>
          </p>
          <p className="text-lg">
            Costemic Type: <span className="font-bold">{type}</span>
          </p>
          <p className="text-lg">
            Price of Product: <span className="font-bold">{price}</span>
          </p>
          <p className="text-lg">
            Rating of Product: <span className="font-bold">{rating}.00</span>
          </p>
          <div className="flex flex-col md:flex-row gap-5  justify-end">
            <div className="card-actions justify-end">
              <button
                onClick={() => handleAddtoCart(_id)}
                className="btn btn-primary"
              >
                Add to Cart
              </button>
            </div>
            <Link
              to={`/updateProduct/${_id}`}
              className="card-actions justify-end"
            >
              <button className="btn btn-primary">Update Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
