import { Fragment } from "react/jsx-runtime";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    title: "Sepatu baru",
    price: "Rp. 1.000.000",
    image: "/images/fashion-shoes-sneakers.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil possimus nemo blanditiis omnis odio itaque nam id ipsum! Qui et quibusdam, saepe nam nobis perspiciatis sint repellat ut dolores in.",
  },
  {
    id: 2,
    title: "Sepatu lama",
    price: "Rp. 500.000",
    image: "/images/fashion-shoes-sneakers.jpg",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    title: "Sepatu adadong",
    price: "Rp. 2.000.000",
    image: "/images/fashion-shoes-sneakers.jpg",
    description: "Ini adalah sepatu dari brand adadong",
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body title={product.title}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductPage;
