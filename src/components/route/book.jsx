const Book = ({ title, author }) => {
    return (
      <li>
        
        <h3>Title: {title}</h3>
        <p>Author: {author}</p>
        <button>Remove</button> {/* Placeholder for the remove button */}
      </li>
    );
  };