// FIREBASE IMPORTS

import { initializeApp }

from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";


import {

getFirestore,

doc,

setDoc

}

from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";







// FIREBASE CONFIG


const firebaseConfig = {


apiKey:
"AIzaSyBBzTwMmhD1t-gZeX5W35K1aG2okrUo91o",


authDomain:
"date-site-bfb53.firebaseapp.com",


projectId:
"date-site-bfb53",


storageBucket:
"date-site-bfb53.firebasestorage.app",


messagingSenderId:
"305849379339",


appId:
"1:305849379339:web:ded141e65eae95ec31f50e"


};








// INITIALIZE


const app =

initializeApp(firebaseConfig);



const db =

getFirestore(app);









// SAVE ADVENTURE


export async function saveAdventure(details){



try{


await setDoc(


doc(

db,

"adventures",

"latest"

),




{


accepted:true,



message:

details.message ||

"Your little adventure was accepted ♡",




date:

details.date ||

"No date chosen",





time:

details.time ||

"No time chosen",





location:

details.location ||

"No location chosen",





dressCode:

details.dressCode ||

"No outfit chosen",





bring:

details.bring ||

"Nothing needed 💜",





plans:

details.plans ||

"No plans added",





updated:

new Date().toISOString()



}



);





console.log(
"Adventure saved to Firebase 💜"
);




}



catch(error){



console.error(

"Firebase save error:",

error

);



}



}