import { initializeApp } from "firebase/app";
import { getStorage,ref,uploadBytes,getDownloadURL } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
//Base de datos full
const firebaseConfig = {
  apiKey: "AIzaSyBCeb1MRw7HMZFNPd5oZkCUAQnKqJF1qp0",
  authDomain: "menu-731da.firebaseapp.com",
  projectId: "menu-731da",
  storageBucket: "menu-731da.appspot.com",
  messagingSenderId: "40653731158",
  appId: "1:40653731158:web:bcbdd7f750fd7a12eb92f7",
  measurementId: "G-362TE6X4EL"
};
//base de datos Prueba 3
// const firebaseConfig = {
//   apiKey: "AIzaSyBAYzHtgeux_VMgQtPuJEesyrUVTxGTm4E",
//   authDomain: "otro-menu.firebaseapp.com",
//   projectId: "otro-menu",
//   storageBucket: "otro-menu.appspot.com",
//   messagingSenderId: "638287269877",
//   appId: "1:638287269877:web:a6fea8eb17b7bdb9c41abc",
//   measurementId: "G-B9SJN1K24D"
// };
// Base de datos Prueba 2
// const firebaseConfig = {   
//   apiKey: "AIzaSyDS6erHHivLsVdKK0dIykPHZJxc4EmkdaI",
//   authDomain: "menunew-16b92.firebaseapp.com",
//   projectId: "menunew-16b92",
//   storageBucket: "menunew-16b92.appspot.com",
//   messagingSenderId: "156069388414",
//   appId: "1:156069388414:web:4b3c356a747f2467cc382f",
//   measurementId: "G-7R5J84L1H1"
// };

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const data = getFirestore(app);
export const db =getFirestore(app);