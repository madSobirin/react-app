import MainLayout from "../layouts/MainLayout";
import CardComponent from "../components/ui/Card";
import { data } from "../db/Blog";
const Blog = () => {
  return (
    <div>
      <MainLayout>
        <div className="mt-3 px-10">
          {data.map(({ id, judul, deskripsi, isi }) => (
            <CardComponent
              key={id}
              judul={judul}
              deskripsi={deskripsi}
              isi={isi}
            />
          ))}
        </div>
      </MainLayout>
    </div>
  );
};

export default Blog;
