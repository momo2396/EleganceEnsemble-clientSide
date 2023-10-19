import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, brand, type, image, rating, name, price } = product;
  const handleDetails = (id) => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="px-3 py-5 card lg:card-side bg-[#ac9ed5] shadow-xl">
      <figure>
        <img className="w-fit h-56" src={image} />
      </figure>
      <div className="text-[#ffe5de] card-body flex flex-col gap-3 justify-center items-center font-serif">
        <h2 className="text-4xl ">{name}</h2>
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
        <Link to={`/details/${_id}`} className="card-actions justify-end">
          <button
            onClick={() => handleDetails(_id)}
            className="btn btn-primary"
          >
            view Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
