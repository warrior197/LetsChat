//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAgk8752WlEMLYwDkhKx0f2RVveBUHBZRc",
      authDomain: "kwitter-40c43.firebaseapp.com",
      databaseURL: "https://kwitter-40c43-default-rtdb.firebaseio.com",
      projectId: "kwitter-40c43",
      storageBucket: "kwitter-40c43.appspot.com",
      messagingSenderId: "112483235489",
      appId: "1:112483235489:web:7677fae5af6034380362e"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";

      
}