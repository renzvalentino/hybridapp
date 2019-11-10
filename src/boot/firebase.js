// import something here
import firebase from "firebase/app";
import "firebase/firestore";
import { firestorePlugin } from "vuefire";

var firebaseConfig = {
  apiKey: "AIzaSyDsA19W4RPvr7qg8TKkSXyveSfem3YS57Y",
  authDomain: "hybrid-app-b51bb.firebaseapp.com",
  databaseURL: "https://hybrid-app-b51bb.firebaseio.com",
  projectId: "hybrid-app-b51bb",
  storageBucket: "hybrid-app-b51bb.appspot.com",
  messagingSenderId: "762720208164",
  appId: "1:762720208164:web:f559d64a85200717b09fb1"
}
firebase.initializeApp(firebaseConfig);

// NoSQL database
var db = firebase.firestore()

export default async ({ Vue }) => {
  // something to do
  Vue.use(firestorePlugin);
  Vue.prototype.$db = db;
}
