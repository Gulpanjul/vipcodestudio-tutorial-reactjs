import CardProduct from "../components/Fragments/CardProduct";

const ProductPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header images="/images/fashion-shoes-sneakers.jpg"/>
        <CardProduct.Body title="Sepatu baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          possimus nemo blanditiis omnis odio itaque nam id ipsum! Qui et
          quibusdam, saepe nam nobis perspiciatis sint repellat ut dolores in.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 1.000.000"/>
      </CardProduct>
      <CardProduct>
        <CardProduct.Header images="/images/fashion-shoes-sneakers.jpg"/>
        <CardProduct.Body title="Sepatu baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          possimus nemo blanditiis omnis odio itaque nam id ipsum! Qui et
          quibusdam, saepe nam nobis perspiciatis sint repellat ut dolores in.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp. 1.000.000"/>
      </CardProduct>
    </div>
  );
};

export default ProductPage;
