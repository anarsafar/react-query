import axios from "axios";
import { useQuery } from "react-query";

const CategoriesQuery = () => {
  const { data, isLoading, isError, error, isFetching } = useQuery(
    "categories",
    () => {
      return axios
        .get("https://northwind.vercel.app/api/categories")
        .then((res) => res.data);
    },
    {
      //   cacheTime: 5000,
      //   staleTime: 15000,
    }
  );

  console.log(`isLoading ${isLoading} isFetching ${isFetching}`);

  if (isLoading) return <h1>loading ...</h1>;

  if (isFetching) return <h1>updating ...</h1>;

  if (isError) return <h1>{error.message}</h1>;

  return (
    <div>
      {data?.map((category, index) => (
        <p key={index}>{category.name}</p>
      ))}
    </div>
  );
};

export default CategoriesQuery;
