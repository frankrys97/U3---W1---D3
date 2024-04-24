import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook.jsx";
import React from "react";

// const myBookList = ({ books }) => {
//   return (
//     <Container>
//       <Row>
//         {books.map((book) => (
//           <SingleBook key={book.id} book={book} />
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default myBookList;

class MyBookList extends React.Component {
  state = {
    searchInput: "",
  };
  render() {
    const searchedBook = this.props.books.filter((book) => {
      return book.title
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
    });

    return (
      <Container className="mt-3">
        <input
          type="text"
          placeholder="Search..."
          value={this.state.searchInput}
          onChange={(e) => this.setState({ searchInput: e.target.value })}
          className="rounded rounded-2 p-1 border border-1 border-dark my-2 d-block ms-auto"
        />
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {searchedBook.map((book) => (
            <SingleBook key={book.asin} book={book} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default MyBookList;
