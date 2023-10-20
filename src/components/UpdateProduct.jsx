import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();
  const { _id, name, image, price, brand, type, rating, details } = product;
  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const image = form.image.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const details = form.details.value;
    const updateProduct = { name, brand, type, image, price, rating, details };
    fetch(`http://localhost:5000/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "You updated the product!",
            icon: "success",
            confirmButtonText: "Close",
          });
        }
      });
  };
  return (
    <div className="px-5 py-10 bg-[#fef9f8] flex flex-col gap-5 justify-center items-center">
      <h3 className="text-4xl font-bold font-serif text-[#7b57e5]">
        Update product: {name}
      </h3>
      <p className="text-lg font-thin font-serif text-[#a294cd]">
        Please, maintain the product authenticity
      </p>
      <div className="w-full lg:w-1/2 bg-[#a294cd] p-3 shadow-2xl rounded-2xl">
        <div className="card w-full bg-base-100">
          <form onSubmit={handleUpdate} className="card-body text-black">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                defaultValue={name}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <select
                type="text"
                name="brand"
                className="select input input-bordered"
                defaultValue={brand}
              >
                <option value="L'Oréal">L'Oréal</option>
                <option value="Estée Lauder">Estée Lauder</option>
                <option value="MAC Cosmetics">MAC Cosmetics</option>
                <option value="Chanel">Chanel</option>
                <option value="Urban Decay">Urban Decay</option>
                <option value="NARS Cosmetics">NARS Cosmetics</option>
                <option value="Dior">Dior</option>
                <option value="Revlon">Revlon</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Type</span>
              </label>
              <select
                type="text"
                name="type"
                className="select input input-bordered"
                defaultValue={type}
                required
              >
                <option value="Lipstick">Lipstick</option>
                <option value="Foundation">Foundation</option>
                <option value="Mascara">Mascara</option>
                <option value="Eyeshadow">Eyeshadow</option>
                <option value="Lash and Brow">Lash and Brow</option>
                <option value="Blush and Bronzer">Blush and Bronzer</option>
                <option value="Fragrance">Fragrance</option>
                <option value="Nail Enamel">Nail Enamel</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Image</span>
              </label>
              <input
                type="text"
                placeholder="image link"
                className="input input-bordered"
                name="image"
                defaultValue={image}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="product price (in dollar)"
                className="input input-bordered"
                name="price"
                defaultValue={price}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <select
                type="text"
                name="rating"
                className="select input input-bordered"
                defaultValue={rating}
                required
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">About Product</span>
              </label>
              <textarea
                placeholder="short description"
                name="details"
                className="textarea textarea-bordered"
                defaultValue={details}
                required
              />
            </div>
            <div className="flex sm:flex-row flex-col gap-5 form-control mt-6">
              <input
                type="submit"
                value="Update Now"
                className="bg-[#a294cd] border-[#a294cd] hover:bg-[#a294cd] hover:border-[#a294cd] btn flex-1 text-[#ffe5de]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
