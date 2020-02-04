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
  document.getElementById("myTable").innerHTML = "";
  for (i = 0; i < data.length; i++) {
    var myTr = document.createElement("tr");

    // var td1 = document.createElement("td");
    // td1.innerHTML = data[i].fname;
    // myTr.appendChild(td1);

    // var td2 = document.createElement("td");
    // td2.innerHTML = data[i].lname;
    // myTr.appendChild(td2);

    // var td3 = document.createElement("td");
    // td3.innerHTML = data[i].gender;
    // myTr.appendChild(td3);

    // var td4 = document.createElement("td");
    // td4.innerHTML = data[i].subjects;
    // myTr.appendChild(td4);
    for (a in data[i]) {
      var td1 = document.createElement("td");
      td1.innerHTML = data[i][a];
      myTr.appendChild(td1);
    }

    var editTd = document.createElement("td");
    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.setAttribute("onclick", "editUser(" + i + ")");
    editTd.appendChild(editBtn);

    var deleteTd = document.createElement("td");
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("onclick", "deleteUser(" + i + ")");
    deleteTd.appendChild(deleteBtn);

    myTr.appendChild(editTd);

    myTr.appendChild(deleteTd);
    document.getElementById("myTable").appendChild(myTr);
  }
}

function editUser(i) {
  index = i;
  for (a in data[i]) {
    if (a != "gender" && a != "subjects" && a != "id") {
      document.getElementById(a).value = data[i][a];
    } else if (a == "gender") {
      allRadioBtns.forEach(function(element) {
        if (element.value == data[i][a]) {
          element.checked = true;
        }
      });
    } else if (a == "subjects") {
      allCheckBoxes.forEach(function(element) {
        element.checked = false;
        data[i][a].forEach(function(val) {
          if (element.value == val) {
            element.checked = true;
          }
        });
      });
    }
  }
}

function deleteUser(i) {
  var sendInfo = new XMLHttpRequest();
  sendInfo.onreadystatechange = function() {
    if (sendInfo.readyState == 4 && sendInfo.status == 200) {
      getDataFromServer();
    }
  };
  sendInfo.open("DELETE", "http://localhost:3000/users/" + data[i].id);
  sendInfo.send();
}

function updateUser() {
  person = captureData();
  var sendInfo = new XMLHttpRequest();
  sendInfo.onreadystatechange = function() {
    if (sendInfo.readyState == 4 && sendInfo.status == 200) {
      console.log("User Added Successfully");
      getDataFromServer();
    }
  };
  sendInfo.open("PUT", "http://localhost:3000/users/" + data[index].id);
  sendInfo.setRequestHeader("Content-Type", "application/json");
  sendInfo.send(JSON.stringify(person));
}
