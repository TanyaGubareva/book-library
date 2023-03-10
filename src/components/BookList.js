import BookShow from "./BookShow";
import BookEdit from "./BookEdit";

function BookList({ books, onDelete, onEdit }) {
  const renderBooks = books.map((book) => {
    return (
      <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    );
  });

  return <div className="book-list">{renderBooks}</div>;
}

export default BookList;
