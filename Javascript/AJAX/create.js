function addUser() {
  var user = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value
  };
  user.id = null;
  postUserToServer(user);
}

function postUserToServer(user) {
  var postUser = new XMLHttpRequest();
  postUser.onreadystatechange = function() {
    if (postUser.readyState == 4 && postUser.status == 201) {
      console.log("User Posted");
    }
  };
  postUser.open("POST", "http://localhost:3000/users");
  postUser.setRequestHeader("Content-Type", "application/json");
  postUser.send(JSON.stringify(user));
}
