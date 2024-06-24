import { defineStore } from "pinia"
import { doc, collection, query, limit, getDocs, orderBy, getFirestore } from "firebase/firestore";
import { ref } from "vue";


export const useUserStore = defineStore('users', {
  state: () => ({users: ref([]),}),
  
  actions: {
  async getAllUsers() {
  const db = getFirestore()
    //const userQuery = query(collection(db, "users"), orderBy("name"))
    this.users = []
    const querySnapsot = await getDocs(collection(db, 'users'))
    querySnapsot.forEach((doc) => {
      const user = {
        id: doc.id,
        content: doc.data()
      }
      this.users.push(user);
      });
    }
  }
})