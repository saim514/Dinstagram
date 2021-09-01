var firebaseConfig = {
    apiKey: "AIzaSyAvByM1fz9zbnIPZ-_59L3qGA4p6C20E4I",
    authDomain: "dinstagram-3e78a.firebaseapp.com",
    projectId: "dinstagram-3e78a",
    storageBucket: "dinstagram-3e78a.appspot.com",
    messagingSenderId: "1012118029655",
    appId: "1:1012118029655:web:f1010528edc9437aa62a12"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();