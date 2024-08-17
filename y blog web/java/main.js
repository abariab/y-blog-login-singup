  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAt_w6DjjezjMCRa91y0VSoc56lyICgZcQ",
    authDomain: "testingpro-66830.firebaseapp.com",
    projectId: "testingpro-66830",
    storageBucket: "testingpro-66830.appspot.com",
    messagingSenderId: "575175008828",
    appId: "1:575175008828:web:8a81a7aa1c3e7db74a1939"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});