import firebase from 'firebase/compat/app';
import 'firebase/compat/database';


const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  };

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };

//child_removed

// database.ref('expenses').on('child_removed',(snapshot)=>{
//   console.log(snapshot.key , snapshot.val())
// })

//child_changed

// database.ref('expenses').on('child_changed',(snapshot)=>{
//   console.log(snapshot.key,snapshot.val())
// })

//child_added

// database.ref('expenses').on('child_added',(snapshot)=>{
//   console.log(snapshot.key,snapshot.val())
// })
// database.ref('expenses').once('value').then((snapshot)=>{
//    const expenses = [];
//    snapshot.forEach((childSnapshot)=>{
//     expenses.push({
//       id:childSnapshot.key,
//     ...childSnapshot.val()
//     })
//    })
//   console.log(expenses)
// })

// database.ref('expenses').on('value', (snapshot)=>{
//   const expenses = [];
//   snapshot.forEach((childSnapshot)=>{
//     expenses.push({
//       id:childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(expenses)
// })

// database.ref('expenses').push({
//    description: 'rent',
//    amount: 13300,
//    createdAt: 1000,
//    note:''
// })

// database.ref().on('value',(snapshot)=>{
//   console.log(snapshot.val())
// })

// database.ref().on('value',(snapshot)=>{
//   const val = snapshot.val()
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })
// database.ref().once('value').then((snapshot)=>{
//   const val = snapshot.val();
//   console.log(val)
// }).catch((e)=>{
//   console.log('some error',e)
// })

// database.ref().set({
//     name: 'Karina',
//     age: 35,
//     stressLevel:6,
//     job: {
//       title: 'software developer',
//       company: 'Google'
//     },
//     location: {
//       city: 'Kyiv',
//       country: 'Ukraine'
//     }
// }).then(()=>{
//   console.log('firebase is saved')
// }).catch((e)=>{
//   console.log('this is faled', e)
// })

// database.ref().update({
//   stressLevel:9,
//   'location/city': 'Seatle',
//   'job/company': 'Amazon' 
// })


// database.ref('isSingle').remove().then(()=>{
//    console.log('remove ')
// }).catch((e)=>{
//   console.log('error',e)
// })

// const db = getDatabase()
// set(ref(db), {name: 'Andrew'})