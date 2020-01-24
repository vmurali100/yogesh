function getDataFromServer() {
  var getInfo = new XMLHttpRequest();
  getInfo.onreadystatechange = function() {
    if (getInfo.readyState == 4 && getInfo.status == 200) {
      console.log(getInfo.response);
      data = JSON.parse(getInfo.response);
      displayData(data);
    }
  };

  getInfo.open("GET", "http://localhost:3000/users");
  getInfo.send();
}
getDataFromServer();

function displayData(data) {
  for (i = 0; i < data.length; i++) {
    var myTr = document.createElement("tr");
    for (a in data[i]) {
      var myTd = document.createElement("td");
      myTd.innerHTML = data[i][a];
      myTr.appendChild(myTd);
    }

    var editTd = document.createElement("td");
    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editTd.appendChild(editBtn);
    myTr.appendChild(editTd);

    var deleteTd = document.createElement("td");
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteTd.appendChild(deleteBtn);
    myTr.appendChild(deleteTd);

    document.getElementById("myTable").appendChild(myTr);
  }
}
