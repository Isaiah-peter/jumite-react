import * as firebase from "firebase/app";
import * as store from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA2uyS6pu-brz7Fsykzv6CrJxUFJY0WnPo",
  authDomain: "shop-1eb99.firebaseapp.com",
  projectId: "shop-1eb99",
  storageBucket: "shop-1eb99.appspot.com",
  messagingSenderId: "81384567880",
  appId: "1:81384567880:web:a1c335377ee69edb9f147d",
};

firebase.initializeApp(firebaseConfig);

const storage = store;

export default storage;
