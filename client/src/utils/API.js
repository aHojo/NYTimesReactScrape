import axios from "axios";
// const key = "491ffd3e66c94f8ba2eaa87512012d3d";
const key = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
let url = " https://api.nytimes.com/svc/search/v2/articlesearch.json?"
export default {
  scrapeArticles: function(title, number, yearStart=null, yearEnd=null) {
    if(yearStart && yearEnd) {
      console.log("BOTH YEAR " + title, number, yearEnd, yearStart);
      return axios.get(`${url}?q=${title}&end_date=${yearEnd}&begin_date=${yearStart}&api-key=${key}`);
    } else if (yearStart) {
      console.log("Year Start Only " + title, number, yearEnd, yearStart);
      return axios.get(`${url}?q=${title}&begin_date=${yearStart}&api-key=${key}`);
    } else if (yearEnd) {
      console.log("Year End Only " + title, number, yearEnd, yearStart);
      return axios.get(`${url}?q=${title}&end_date=${yearEnd}&api-key=${key}`);
    } else {
      console.log("Title and Number only " + title, number, yearStart, yearEnd);
      return axios.get(`${url}?q=${title}&api-key=${key}`);
    }

    
    // 
  },
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the Article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the Article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a Article to the database
  saveArticle: function(ArticleData) {
    return axios.post("/api/articles", ArticleData);
  }
};
