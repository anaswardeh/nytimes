import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const api_key = "api-key=6d6d2f424c1c4eca979ef4d195145548&q=";

export default {
  searchArticle: function(title, begin_date, end_date) {
    return axios.get( BASEURL + api_key + title + "&begin_date=" + begin_date + "-01-01&end_date=" + end_date + "-12-31&sort=newest");

  },
  // Deletes the book with the given id
  deleteArticle: function (id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a book to the database
  saveArticle: function (articleData) {
    return axios.post("/api/articles/", articleData);
  },
  // Gets the book with the given id
  getArticles: function (id) {
    return axios.get("/api/articles/" + id);
  },
  patchArticle: function (id, articleData) {
    return axios.patch("/api/articles/" + id, articleData);
  },

};

