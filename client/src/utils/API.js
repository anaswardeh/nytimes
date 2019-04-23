import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const api_key = "api-key=U7t2mvGbWWi0EmCiexqEUTjwFUjBEEa9&q=";


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
  getArticle: function (id) {
    return axios.get("/api/article/" + id);
  },
  patchArticle: function (id, articleData) {
    return axios.patch("/api/articles/" + id, articleData);
  },
    getArticles: function (uid) {
    return axios.get("/api/allarticles/" + uid);
  },

};

