import { defineStore } from "pinia"
import { collection, query, limit, getDocs, orderBy, getFirestore } from "firebase/firestore";

const db = getFirestore()
export const useUserStore = defineStore('users', {
  state: () => ({users: [], }),

actions: {
  allUsers() {
    const userQuery = query(collection(db, "users"))
    const querySnapsot = getDocs(userQuery)
    querySnapsot.forEach(doc => {
      let us = doc.data();
      us.id = doc.id;
      this.users.push(us);
      console.log(this.users)
    });
  }
  
  }
})