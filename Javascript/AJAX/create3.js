function addUser() {
  var person = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value
  };
  postDataToServer(person);
}

function postDataToServer(person) {
  var sendInfo = new XMLHttpRequest();
  sendInfo.onreadystatechange = function() {
    if (sendInfo.readyState == 4 && sendInfo.status == 201) {
      console.log("User Added Successfully");
    }
  };
  sendInfo.open("POST", "http://localhost:3000/users");
  sendInfo.setRequestHeader("Content-Type", "application/json");
  sendInfo.send(JSON.stringify(person));
}
