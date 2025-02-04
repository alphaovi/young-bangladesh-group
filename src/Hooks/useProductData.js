import { useEffect, useState } from "react";

const useProductData = () => {
  const [productsData, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return [productsData];
};

export default useProductData;
