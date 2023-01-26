import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import useCategories from "./query/categories.query";
import { useState } from "react";

const CategoriesQuery = () => {
  const postData = (data) =>
    axios.post("https://northwind.vercel.app/api/categories/", data);

  const [category, setCategory] = useState({
    name: "",
  });

  const usePostData = () => {
    const client = useQueryClient();
    return useMutation(postData, {
      onSuccess: () => client.invalidateQueries("categories"),
    });
  };

  const { mutate } = usePostData();
  const { data, isLoading, isError, error, isFetching, refetch } =
    useCategories();

  //   console.log(`isLoading ${isLoading} isFetching ${isFetching}`);

  if (isLoading) return <h1>loading ...</h1>;

  if (isFetching) return <h1>updating ...</h1>;

  if (isError) return <h1>{error.message}</h1>;

  console.log(category);

  const handlePost = () => {
    mutate(category);
  };

  return (
    <div>
      <input
        type="text"
        value={category.name}
        onChange={(e) =>
          setCategory({
            name: e.target.value,
          })
        }
      />
      <button onClick={handlePost}>post data</button>
      <button onClick={refetch}>get all data</button>

      {data?.map((category, index) => (
        <div key={index}>
          <p key={index}>{category.name}</p>
          <p>{category.description}</p>
        </div>
      ))}

      {/* {data?.map((category, index) => (
        <p key={index}>{category.name}</p>
      ))} */}
    </div>
  );
};

export default CategoriesQuery;
