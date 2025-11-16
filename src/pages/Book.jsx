import data from "../data/book.json";
const Book = () => {
  return (
    <div>
      {data.map((item) => {
        const { title, id, author } = item;
        return (
          <p key={id}>
            Nama buku: {title}, Penulis: {author}
          </p>
        );
      })}
    </div>
  );
};
export default Book;
