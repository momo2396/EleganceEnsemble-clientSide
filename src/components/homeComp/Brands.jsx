import Brand from "./Brand";

const Brands = () => {
  const brands = [
    {
      id: 1,
      brand: "L'Oréal",
      image: "https://i.ibb.co/HFv0JJG/188b1e59d0daee929960d9f199ef3a04.jpg",
    },
    {
      id: 2,
      brand: "Estée Lauder",
      image: "https://i.ibb.co/yFq5CwX/Estee-Lauder-Symbol.png",
    },
    {
      id: 3,
      brand: "MAC Cosmetics",
      image: "https://i.ibb.co/4pj6rjm/MAC-1024x538.jpg",
    },
    { id: 4, brand: "Chanel", image: "https://i.ibb.co/prN5xjh/OIP.jpg" },
    { id: 5, brand: "Dior", image: "https://i.ibb.co/x37vdy2/OIP.jpg" },
    {
      id: 6,
      brand: "Revlon",
      image:
        "https://i.ibb.co/CWyDpgg/Revlon-Lipstick-Day-Blog-Feature-960x500-V1-png-1531855694.jpg",
    },
    { id: 7, brand: "Urban Decay", image: "https://i.ibb.co/Bfkd95P/R.jpg" },
    {
      id: 8,
      brand: "NARS Cosmetics",
      image: "https://i.ibb.co/gvwjktk/NARS-Cosmetics.jpg",
    },
  ];
  return (
    <div className="max-w-[1440px] mx-auto px-5 py-10 flex flex-col gap-5 justify-center items-center">
      <h2 className="text-7xl font-bold font-serif text-[#a294cd]">Brands</h2>
      <p className="font-bold font-serif text-[#a294cd] textid:1-lg">
        Choose your brand
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {brands.map((b) => (
          <Brand key={b.id} b={b}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Brands;
