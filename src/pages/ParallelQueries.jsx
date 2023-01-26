import axios from "axios";
import { useQuery } from "react-query";

const ParallelQueries = () => {
  const { data: product } = useQuery("product", () => {
    return axios.get("https://northwind.vercel.app/api/products/4");
  });

  console.log(product);
  const supplierID = product?.data?.supplier?.id;

  console.log(supplierID);

  const { data: suppliers } = useQuery(
    ["suppliers", supplierID],
    (supplierID) => {
      return axios.get(
        `https://northwind.vercel.app/api/suppliers/${supplierID}`
      );
    },
    {
      enabled: !!supplierID,
    }
  );

  return <div></div>;
};

export default ParallelQueries;
