import * as firebase from 'firebase';



  const firebaseConfig = {
    apiKey: "AIzaSyAN3O_-xUKR2fdvAuQWaM6P19qVPMvoxeI",
    authDomain: "budget-app-258e2.firebaseapp.com",
    databaseURL: "https://budget-app-258e2.firebaseio.com",
    projectId: "budget-app-258e2",
    storageBucket: "budget-app-258e2.appspot.com",
    messagingSenderId: "894328476259",
    appId: "1:894328476259:web:61f8cdb8e7209df1405e56",
    measurementId: "G-T3X4XRDRKN"
  };
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const database=firebase.database();
  const googleAuthProvider=new firebase.auth.GoogleAuthProvider();
  export{firebase,googleAuthProvider ,database as default};