import MainLayout from "../layouts/MainLayout";
import CardComponent from "../components/ui/Card";
// import { data } from "../db/Blog";
import { useEffect } from "react";
import { useState } from "react";
const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((res) => setData(res.posts))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-gray-900">
      <MainLayout>
        <div className="mt-3 px-10">
          {data.map(({ id, title, body }) => (
            <CardComponent key={id} judul={title} deskripsi={body} isi={body} />
          ))}
        </div>
      </MainLayout>
    </div>
  );
};

export default Blog;
