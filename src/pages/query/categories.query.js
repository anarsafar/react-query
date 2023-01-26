import axios from "axios";
import { useQuery } from "react-query";

const getAll = () => {
  return axios
    .get("https://northwind.vercel.app/api/categories")
    .then((res) => res.data);
};

const useCategories = () => {
  return useQuery(
    "categories",
    () => {
      return getAll();
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
};

export default useCategories;
