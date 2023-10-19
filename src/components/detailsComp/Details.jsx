import { Link, useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const products = useLoaderData();
  const { id } = useParams();
  const product = products.find((product) => product._id == id);
  const { _id, name, image, price, brand, type, rating, details } = product;
  const handleUpdate = (_id) => {};
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
          <Link
            to={`/updateProduct/${_id}`}
            className="card-actions justify-end"
          >
            <button
              onClick={() => handleUpdate(_id)}
              className="btn btn-primary"
            >
              Update Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
