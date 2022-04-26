// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBUaFI9YacUE1YtNaw7F0WFh_AFPtIGro",
    authDomain: "ecommerce-mechib.firebaseapp.com",
    projectId: "ecommerce-mechib",
    storageBucket: "ecommerce-mechib.appspot.com",
    messagingSenderId: "259861630912",
    appId: "1:259861630912:web:c35174d644dc7030968225"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db