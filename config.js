import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    
        apiKey: "AIzaSyAJDmympB8graZeqIsF9hZo2JubRaCuTuY",
        authDomain: "pro-58-5997f.firebaseapp.com",
        databaseURL: "https://pro-58-5997f-default-rtdb.firebaseio.com",
        projectId: "pro-58-5997f",
        storageBucket: "pro-58-5997f.appspot.com",
        messagingSenderId: "565189632281",
        appId: "1:565189632281:web:3593d9b70faf3b587fe588"
      
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();