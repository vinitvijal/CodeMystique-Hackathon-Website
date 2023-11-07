import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { FirebaseConfigs } from "./configs";

const FirebaseApp = initializeApp({
	apiKey: "AIzaSyApv1xgEqGDN2PNRJpsEFaXckbcZFzGi-U",
	authDomain: "moonsite-ec73d.firebaseapp.com",
	projectId: "moonsite-ec73d",
	storageBucket: "moonsite-ec73d.appspot.com",
	messagingSenderId: "451859696748",
	appId: "1:451859696748:web:a949d91a410d3f08985c49"
});

const Db = getFirestore(FirebaseApp);
const Storage = getStorage(FirebaseApp);


export { FirebaseApp, Db, Storage };
