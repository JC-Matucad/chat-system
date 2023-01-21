// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC3r0vM6FiuoDKmZiNWUyRS51s-Wh9hrxg",
  authDomain: "chat-system-eb832.firebaseapp.com",
  databaseURL: "https://chat-system-eb832-default-rtdb.firebaseio.com",
  projectId: "chat-system-eb832",
  storageBucket: "chat-system-eb832.appspot.com",
  messagingSenderId: "60953426173",
  appId: "1:60953426173:web:afa4abfdd01baeea622694",
  measurementId: "G-G0ZMSL8QCH",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

function sendmessage() {
  var message = document.getElementById("message").value;
  var uuser = document.getElementById("uuser").value;

  firebase.database().ref("message").push().set({
    message: message,
    User: uuser,
  });

  document.getElementById("displaysend").innerHTML = message;

  return false;
}

firebase
  .database()
  .ref("message")
  .on("child_added", function (snapshot) {
    var html =
      "<li class='bubble'>" +
      snapshot.val().User +
      "  :" +
      snapshot.val().message +
      "</li>";

    document.getElementById("displayme").innerHTML += html;
    document.getElementById("message").value = "";
  });

//End of database Script

//Event Send Message
document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("sendbtn");
  message.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      button.click();
    }
  });
});

// Get the modal, button and input elements
var modal = document.getElementById("my-modal");

function loginbtn() {
  var uuser = document.getElementById("uuser").value;

  if (uuser == "") {
    alert("enter username");
  } else {
    modal.style.display = "none";
  }
}
