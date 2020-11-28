import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAMNIorq48wynkSyFoLBC6SEI2xpmGZats",
  authDomain: "instafeed-40e02.firebaseapp.com",
  databaseURL: "https://instafeed-40e02.firebaseio.com",
  projectId: "instafeed-40e02",
  storageBucket: "instafeed-40e02.appspot.com",
  messagingSenderId: "878713744116",
  appId: "1:878713744116:web:b0b779e11ca17332338ca1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };