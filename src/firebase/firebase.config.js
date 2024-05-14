// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnMQG__4BKVwci-MBFtpQvQWGmfJQrXHE",
  authDomain: "assignmentx-chef-recipe-client.firebaseapp.com",
  projectId: "assignmentx-chef-recipe-client",
  storageBucket: "assignmentx-chef-recipe-client.appspot.com",
  messagingSenderId: "675965226242",
  appId: "1:675965226242:web:c44c67880ff29ce29b461b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;