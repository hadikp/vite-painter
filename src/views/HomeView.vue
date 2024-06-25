<script setup>
import { doc, getFirestore, collection, query, where } from 'firebase/firestore';
import { addDoc, setDoc, getDoc, deleteDoc, getDocs } from 'firebase/firestore';
import { onMounted, ref } from 'vue';
import { useUserStore } from '../stores/user'

const db = getFirestore()

const userData = useUserStore()

const deletedUser = ref("")

onMounted(async () => {
  userData.getAllUsers()
  })

//add data to firestore
const createUser = () => {
  const collectionRef = collection(db, 'users')
  const data = {
  name: 'Jane Doe',
  email: 'jane@example.com',
  }
  const docRef = addDoc(collectionRef, data)
  console.log('Document was created with ID:', docRef.id)
}

const createCountry = () => {
  setDoc(doc(db, 'countries', 'GB'), {
    name: 'Great Britain'
  })
  console.log('To add country')
}

//read data from firestore
const readData = async () => {
  const docSnap = await getDoc(doc(db, 'countries', 'GB'))
  //const docSnap = await getDoc(doc(db, 'users', 'hPVRsOZ7SeDFS2kPykid'))
    if (docSnap.exists) {
      console.log(docSnap.data());
    } else {
      console.log('No such document!');
    }
}

//delete user
const dropUser = async () => {
  const users = userData.users
  for(let i = 0; i < users.length; i ++){
    if(users[i].name == deletedUser.value){
      await deleteDoc(doc(db, 'users', users[i].id))
      console.log('User delete', users[i].name)
    }
  }
}

/* const getAllUser = async () => {
  const q = query(collection(db, 'users'), where('name', '==', 'true'))
  const allUser = await getDoc(q)
  const documents = []
  collection(db, 'users').then(querySnapshot => {
    documents = querySnapshot.docs.map(doc => doc.data())
  })
  console.log(documents)
} */

</script>

<template>
  <div class="about">
    <h1 class="p-3 mb-2 bg-warning text-dark">This is a home page</h1>
  </div>
  <button @click="createUser">Create User</button>
  <button @click="createCountry">Create country</button>
  <button @click="readData">Read User</button>

  <h3>Wich user to delete? Add user name!</h3>
  <input type="deletedUser" placeholder="user to delete" v-model="deletedUser">
  <button @click="dropUser">Delete User</button>

</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
