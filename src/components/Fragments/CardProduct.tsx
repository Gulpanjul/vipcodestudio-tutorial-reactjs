import Button from "../Elements/Button";

interface CardProductProps {
  children?: React.ReactNode;
  name?: string;
  image?: string;
  price?: number;
  handleAddToCart?: (id: number) => void;
  id?: number;
}

const CardProduct = (props: CardProductProps) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-3 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = (props: CardProductProps) => {
  const { image } = props;
  return (
    <a href="#">
      <img
        src={image}
        alt="products"
        className="p-8 rounded-t-lg h-60 w-full object-cover"
      />
    </a>
  );
};

const Body = (props: CardProductProps) => {
  const { children, name } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name?.substring(0, 20)} ...
        </h5>
        <p className="text-s text-white">
          {typeof children === "string" ? children.substring(0, 100) : children}
          ...
        </p>
      </a>
    </div>
  );
};

const Footer = (props: CardProductProps) => {
  const { price, handleAddToCart, id } = props;
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">
        {price?.toLocaleString("us-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
        })}
      </span>
      <Button classname="bg-blue-600" onClick={() => handleAddToCart?.(id!)}>
        Add to Card
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
