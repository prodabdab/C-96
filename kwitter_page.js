var firebaseConfig = {
      apiKey: "AIzaSyDs-sp97c_ePGt21SlXzBGAhhFgPMzzvE4",
      authDomain: "kwitter-376f2.firebaseapp.com",
      databaseURL: "https://kwitter-376f2-default-rtdb.firebaseio.com",
      projectId: "kwitter-376f2",
      storageBucket: "kwitter-376f2.appspot.com",
      messagingSenderId: "72847565131",
      appId: "1:72847565131:web:681104a2fb58f7103f48ce"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 
    username=localStorage.getItem('Userame_of_the_prson_KK');
    room_name=localStorage.getItem('room_name');

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

      } });  }); }


function send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            message:msg,
            name:username,
            like:0
      });   
      document.getElementById("msg").value="";
}
function logout() {
      localStorage.removeItem('Userame_of_the_prson_KK');
      window.location="Login_of_kwitter.html";
}
getData();
