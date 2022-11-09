import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCksh-WGpGpB7FE5V-_m8DY5mc0guRWues",
    authDomain: "food-delivery-app-7dcae.firebaseapp.com",
    databaseURL: "https://food-delivery-app-7dcae-default-rtdb.firebaseio.com",
    projectId: "food-delivery-app-7dcae",
    storageBucket: "food-delivery-app-7dcae.appspot.com",
    messagingSenderId: "71732595222",
    appId: "1:71732595222:web:2b52d34b1fe2fb50364337"
  };

const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage (app);

export { app, firestore, storage };