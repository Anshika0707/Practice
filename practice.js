var firebaseConfig = {
    apiKey: "AIzaSyB2MGv3i8kIAuTP0KYw7Ac9uNfeC_y4Oas",
    authDomain: "practice-dcf97.firebaseapp.com",
    databaseURL: "https://practice-dcf97-default-rtdb.firebaseio.com",
    projectId: "practice-dcf97",
    storageBucket: "practice-dcf97.appspot.com",
    messagingSenderId: "268909922640",
    appId: "1:268909922640:web:6785d9026adf2fe848c455",
    measurementId: "G-N0ZBK9VPZG"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update ({
    purpose : "adding user"
})  ;
}