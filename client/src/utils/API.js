import axios from "axios";



const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const api_key = "api-key=6d6d2f424c1c4eca979ef4d195145548&q=";

export default {
  searchArticle: function(title, begin_date, end_date) {
    return axios.get( BASEURL + api_key + title + "&begin_date=" + begin_date +"&end_date=" + end_date);
  }
};
