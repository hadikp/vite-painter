import { defineStore } from "pinia"
import { doc, collection, query, limit, getDocs, orderBy, getFirestore } from "firebase/firestore";

export const useUserStore = defineStore('users', {
  state: () => ({users: [], }),

actions: {
  getAllUsers() {
    const db = getFirestore()
    //const userQuery = query(collection(db, "users"), orderBy("name"))
    this.users = []
   /*  const querySnapsot = getDocs(collection(db, 'users'))
    querySnapsot.forEach((doc) => {
      let us = doc.data();
      us.id = doc.id;
      this.users.push(us);
      console.log(doc.id, "=", doc.data())
      }); */
    }
  
  }
})