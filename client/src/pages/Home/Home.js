import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import SaveBtn from "../../components/SaveBtn"
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
import { Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import { Input,FormBtn } from "../../components/Form";

class Home extends Component {
  state = {
    articles: [],
    savedArticles: [],
    title: "",
    number: "",
    yearStart: "",
    yearEnd: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles().then(articles => {
      this.setState({savedArticles: articles.data});
      
    })
  }

  handleInputs = (event) => {
    const {value, name} = event.target;
    this.setState({
      [name]: value
    })
  }

  getSearch = (event) => {
    event.preventDefault();
    const {title, number, yearStart, yearEnd} = this.state;
    API.scrapeArticles(title, number, yearStart, yearEnd).then(data => {
      this.setState({
        articles: data.data.response.docs
      });
    });
    
  }

  saveArticle(title, date, url) {
    API.saveArticle({
      title,
      date,
      url
    })
    .then(data => {
      this.loadArticles();
    })
    .catch(err => console.log(err));
  }

  deleteArticle = (id) => {
    API.deleteArticle(id).then(data => {
      this.loadArticles();
    });
  }
  render() {
    return (
      <Container fluid>
        <Jumbotron> NY Times Articles </Jumbotron>
        <Container>
          <form style={{border: "1px solid black", padding: "20px", paddingBottom: "50px", marginBottom: "20px"}}>
            <Input name="title" value={this.state.title} onChange={this.handleInputs} label="Title Search" placeholder="Title" />
            <Input name="yearStart" value={this.state.yearStart} onChange={this.handleInputs} label="Start Year (Optional)" placeholder="YYYYMMDD" />
            <Input name="yearEnd" value={this.state.yearEnd} onChange={this.handleInputs} label="End Year (Optional)" placeholder="YYYYMMDD" />
            <FormBtn onClick={this.getSearch}> Get New Articles </FormBtn>
          </form>
        </Container>
        <Container >
          <h3>Search Results: </h3>
        {this.state.articles.length ? (
              <List>
                {this.state.articles.map((article, i) => (
                  <ListItem key={article._id} id={article._id} date={article.pub_date}>
                    <a href={article.web_url}>{article.headline.main}</a>
                    <SaveBtn onClick={() => this.saveArticle(article.headline.main, article.pub_date, article.web_url)}/>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results Search Results to Display</h3>
            )}
        </Container>
        <Container >
          <h3 style={{marginTop: "20px"}}>Saved Articles: </h3>
          { this.state.savedArticles.length ? (
          <List>
             {this.state.savedArticles.map((article, i) => (
              <ListItem key={article._id} id={article._id}>
                <a href={article.url}>{article.title}</a>
                <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
              </ListItem>
            ))} 
          </List>
          ): ( <h3> No Saved Articles</h3> )}
        </Container>
      </Container>
        
    );
  }
}

export default Home;