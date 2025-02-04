import useProductData from "../../../Hooks/useProductData";
import Product from "./Product";

const Products = () => {
  const [productsData] = useProductData();
  console.log(productsData)

  return (
    <div>
      <div className="grid lg:grid-cols-4 gap-6 mt-5 p-10">
        {productsData.map((productData) => (
          <Product key={productData.id} productData={productData}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
