import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, query, where} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA0EOdF7HLQWx8LOyxsEMBhNhHodpqqFLw",
  authDomain: "learning-react-firebase-24058.firebaseapp.com",
  projectId: "learning-react-firebase-24058",
  storageBucket: "learning-react-firebase-24058.appspot.com",
  messagingSenderId: "666724961395",
  appId: "1:666724961395:web:d8dc6c0e91d1e12a822e06"
};

initializeApp(firebaseConfig);

const firestore = getFirestore();

export const getUsers = async () => {
  const querySnapshot = await getDocs(collection(firestore, "users"));
  const users = []

  querySnapshot.forEach(user => users.push(user.data()))

  return users
}

export const getMovies = async () => {
  const querySnapshot = await getDocs(collection(firestore, "movies"));
  const movies = []

  querySnapshot.forEach(movie => movies.push(movie.data()))

  return movies
}

export const getMaleUsers = async () => {
  const docs = query(collection(firestore, "users"), where("gender", "==", "MALE"))
  const querySnapshot = await getDocs(docs)
  const users = []

  querySnapshot.forEach(user => users.push(user.data()))

  return users
}

export const getFemaleUsers = async () => {
  const docs = query(collection(firestore, "users"), where("gender", "==", "FEMALE"))
  const querySnapshot = await getDocs(docs)
  const users = []

  querySnapshot.forEach(user => users.push(user.data()))

  return users
}

export const getSubscribedFemaleUsers = async () => {
  const docs = query(collection(firestore, "users"), where("gender", "==", "FEMALE"), where("subscribed", "==", true))
  const querySnapshot = await getDocs(docs)
  const users = []

  querySnapshot.forEach(user => users.push(user.data()))

  return users
}