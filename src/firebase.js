import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyBLuT7ZwWXsy--CPCqLBLUf86cRDICVpcE",
	authDomain: "backend-880.firebaseapp.com",
	projectId: "backend-880",
	storageBucket: "backend-880.appspot.com",
	messagingSenderId: "195039386427",
	appId: "1:195039386427:web:4377e8de5c52e334b1f51e",
};
const app = firebase.initializeApp(firebaseConfig);
export const getFirestore = () => {
	return firebase.firestore(app);
};
