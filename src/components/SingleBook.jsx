import { Button, Card, Col } from "react-bootstrap";
import React from "react";
// const mySingleBook = ({book}) => {
//   return (
//     <Col>
//       <Card className="h-100 card">
//         <Card.Img
//           variant="top"
//           src={book.img}
//           alt={book.title}
//           className="cards-image"
//         />
//         <Card.Body className="d-flex flex-column justify-content-between align-items-start">
//           <Card.Title>{book.title}</Card.Title>
//           <Card.Text>
//             {book.category} - {book.price}€
//           </Card.Text>
//           <Button variant="primary">Buy It</Button>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// };

// export default mySingleBook;

class MySingleBook extends React.Component {
  state = {
    selected: null,
  };
  render() {
    return (
      <Col>
        <Card
          className={`h-100 card ${
            this.state.selected === this.props.book.asin ? "selected" : ""
          }`}
        >
          <Card.Img
            variant="top"
            src={this.props.book.img}
            alt={this.props.book.title}
            className="cards-image"
            onClick={() => this.setState({ selected: this.props.book.asin })}
          />
          <Card.Body className="d-flex flex-column justify-content-between align-items-start">
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>
              {this.props.book.category} - {this.props.book.price}€
            </Card.Text>
            <Button variant="primary">Buy It</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default MySingleBook;
