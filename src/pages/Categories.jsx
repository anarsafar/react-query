import axios from "axios";
import { useEffect, useState } from "react";

const Categories = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://northwind.vercel.app/api/categories")
      .then((res) => {
        setData(res.data);
        setLoading(false);
        setErr("");
      })
      .catch((error) => setErr(error.message));
  }, []);

  if (err) return <h1>error happend</h1>;

  if (loading) return <h1>loading ...</h1>;

  return (
    <div>
      {data?.map((category, index) => (
        <p key={index}>{category.name}</p>
      ))}
    </div>
  );
};

export default Categories;
