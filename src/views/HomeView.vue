<script setup>
import { doc, getFirestore } from 'firebase/firestore';
import { collection, addDoc, setDoc, getDoc } from 'firebase/firestore';

const db = getFirestore()

//add data to firestore
const createUser = () => {
  const collectionRef = collection(db, 'users')
  const data = {
  name: 'Newer Doe',
  email: 'newer@example.com',
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

</script>

<template>
  <div class="about">
    <h1 class="p-3 mb-2 bg-warning text-dark">This is a home page</h1>
  </div>
  <button @click="createUser">Create User</button>
  <button @click="createCountry">Create country</button>
  <button @click="readData">Read User</button>

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
