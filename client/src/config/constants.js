import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCllpZ_MtdvTg6Jmt_xTqNqqh0qCydnuoA",
  authDomain: "AIzaSyCllpZ_MtdvTg6Jmt_xTqNqqh0qCydnuoA",
  databaseURL: "https://nytimes-e778c.firebaseio.com"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth