// firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAsxhHa-ZKG5v2uY0CSF-g-SPml2m9WEGg",
    authDomain: "myms-cd322.firebaseapp.com",
    projectId: "myms-cd322",
    storageBucket: "myms-cd322.firebasestorage.app",
    messagingSenderId: "229970677304",
    appId: "1:229970677304:web:48aed4b57b071e66b160cd",
    measurementId: "G-PYKRN0T9YW"
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
