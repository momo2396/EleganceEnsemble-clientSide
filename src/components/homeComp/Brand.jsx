import { Link } from "react-router-dom";

const Brand = ({ b }) => {
  const { brand, image } = b;
  const handleBrand = (brand) => {
    fetch(`https://brand-shop-server-side-b8a10.vercel.app/product/${brand}`)
      .then((res) => res.json())
      .then(() => {
        // console.log(data);
      });
  };
  return (
    <>
      <Link to={`/brandProducts/${brand}`}>
        <div
          onClick={() => handleBrand(brand)}
          className="py-4 px-3 card card-side bg-base-100 shadow-xl"
        >
          <figure>
            <img className="w-full h-44" src={image} />
          </figure>
          <div className="card-body">
            <h2 className="text-center text-black  mt-10 text-2xl font-serif">
              {brand}
            </h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Brand;
