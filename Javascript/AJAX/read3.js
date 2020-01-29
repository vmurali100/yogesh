function getDataFromServer() {
  var getUser = new XMLHttpRequest();
  getUser.onreadystatechange = function() {
    if (getUser.readyState == 4 && getUser.status == 200) {
      data = JSON.parse(getUser.response);
      displayData(data);
    }
  };
  getUser.open("GET", "http://localhost:3000/users");
  getUser.send();
}

getDataFromServer();

function displayData() {
  for (i = 0; i < 5; i++) {
    var myTr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerHTML = data[i].fname;
    myTr.appendChild(td1);

    var td2 = document.createElement("td");
    td2.innerHTML = data[i].lname;
    myTr.appendChild(td2);

    var editTd = document.createElement("td");
    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.setAttribute("onclick", "editUser()");
    editTd.appendChild(editBtn);

    var deleteTd = document.createElement("td");
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("onclick", "deleteUser()");
    deleteTd.appendChild(deleteBtn);

    myTr.appendChild(editTd);

    myTr.appendChild(deleteTd);
    document.getElementById("myTable").appendChild(myTr);
  }
}

function editUser() {
  console.log("editUser is called");
}

function deleteUser() {
  console.log("deleteUser is called");
}
