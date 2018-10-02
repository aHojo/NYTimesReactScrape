import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Home extends Component {
  state = {
    articles: [],
    title: "",
    number: "",
    yearStart: "",
    yearEnd: ""
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };
  handleInputs = (event) => {
    const {value, name} = event.target;
    this.setState({
      [name]: value
    })
    console.log(this.state.title);
  }

  getSearch = (event) => {
    event.preventDefault();
    if(this.state.title) {
      console.log(this.state);
    }
  }
  render() {
    return (
      <Container fluid>
        <Jumbotron> NY Times Articles </Jumbotron>
        <Container>
          <form style={{border: "1px solid black", padding: "20px", paddingBottom: "50px", marginBottom: "20px"}}>
            <Input name="title" value={this.state.title} onChange={this.handleInputs} label="Title Search" />
            <Input name="number" value={this.state.number} onChange={this.handleInputs} label="Number of Records to Retrieve" />
            <Input name="yearStart" value={this.state.yearStart} onChange={this.handleInputs} label="Start Year (Optional)" />
            <Input name="yearEnd" value={this.state.yearEnd} onChange={this.handleInputs} label="End Year (Optional)" />
            <FormBtn onClick={this.getSearch}> Get New Articles </FormBtn>
          </form>
        </Container>
        <Container >
        {this.state.articles.length ? (
              <List>
                {this.state.articles.map(book => (
                  <ListItem key={book._id}>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </Container>
      </Container>
        
    );
  }
}

export default Home;

{/* <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container> */}