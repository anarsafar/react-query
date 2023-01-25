import axios from "axios";
import { useQuery } from "react-query";

const CategoriesQuery = () => {
  const { data, isLoading, isError, error, isFetching, refetch } = useQuery(
    "categories",
    () => {
      return axios
        .get("https://northwind.vercel.app/api/categories")
        .then((res) => res.data);
    },
    {
      //   select: () => {
      //     return data.filter((dat) => dat.name);
      //   },
      //   enabled: false, //default false
      //   cacheTime: 5000,
      //   staleTime: 10000,
      //   refetchOnMount: false,
      //   refetchOnWindowFocus: false,
      //   refetchInterval: 2000,
      //   refetchIntervalInBackground: 2000,
      //   onSuccess: () => console.log("successully fetched"),
      //   onError: () => console.log("error happend"),
    }
  );

  //   console.log(`isLoading ${isLoading} isFetching ${isFetching}`);

  if (isLoading) return <h1>loading ...</h1>;

  if (isFetching) return <h1>updating ...</h1>;

  if (isError) return <h1>{error.message}</h1>;

  return (
    <div>
      <button onClick={refetch}>get all data</button>
      {/* {data?.map((category, index) => (
        <p key={index}>{category.name}</p>
        <p>{category.description}</p>
      ))} */}

      {data?.map((category, index) => (
        <p key={index}>{category.name}</p>
      ))}
    </div>
  );
};

export default CategoriesQuery;
