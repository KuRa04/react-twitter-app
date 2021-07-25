import firebase from 'firebase/app'
export interface User {
  id: string
  username: string
  email: string
  createTime: firebase.firestore.Timestamp
  updateTime: firebase.firestore.Timestamp
}
