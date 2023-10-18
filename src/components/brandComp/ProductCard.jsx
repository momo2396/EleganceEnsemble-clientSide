const ProductCard = ({ product }) => {
  const { brand, type, image, rating, name, price } = product;
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
          Costemics Type: <span className="font-bold">{type}</span>
        </p>
        <p className="text-lg">
          Price of Product: <span className="font-bold">{price}</span>
        </p>
        <p className="text-lg">
          Rating of Product: <span className="font-bold">{rating}.00</span>
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">view Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
