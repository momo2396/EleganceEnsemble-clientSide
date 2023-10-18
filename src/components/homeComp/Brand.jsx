import { Link } from "react-router-dom";

const Brand = ({ b }) => {
  const { brand, image } = b;
  const handleBrand = (brand) => {
    // console.log(brand);
    fetch(`http://localhost:5000/product/${brand}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
            <h2 className="text-center mt-10 text-2xl font-serif">{brand}</h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Brand;
