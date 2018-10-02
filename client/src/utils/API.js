import axios from "axios";
const key = "491ffd3e66c94f8ba2eaa87512012d3d";
let url = " http://api.nytimes.com/svc/search/v2/articlesearch.json?"
export default {
  scrapArticles: function() {
    return axios.get();
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
  saveArticles: function(ArticleData) {
    return axios.post("/api/articles", ArticleData);
  }
};
