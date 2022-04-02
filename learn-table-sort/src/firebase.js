import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, query, where, addDoc, deleteDoc, doc, setDoc} from "firebase/firestore";

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

  querySnapshot.forEach(user => {
    const data = {
      id: user.id,
      ...user.data()
    }
    // menambahkan object dia sendiri ke object lain
    // spread operator -> for copy object or array

    users.push(data)
  })

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

export const createUser = async (name, age, gender, subscribed) => {
  let subscribedValue = false

  if (subscribed === 'true') {
    subscribedValue = true
  }

  const user = {
    name: name,
    age: age,
    gender: gender,
    subscribed: subscribedValue
  }

  await addDoc(collection(firestore, 'users'), user)
}

export const deleteUser = async (id) => {
  await deleteDoc(doc(firestore, 'users', id))
  console.log(`successfully delete user with id: ${id}`)
}

export const updateUser = async (id, user) => {
  await setDoc(doc(firestore, 'users', id), user)
  console.log(`successfully update user with id: ${id}`)
}