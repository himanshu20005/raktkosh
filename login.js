function login_func() {
  var userid = document.getElementById("userid").value;
  var pwd = document.getElementById("pwd").value;
  console.log(userid);

  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      var employees = JSON.parse(xmlHttp.responseText)._embedded.employees;
      var flag = false;
      for (var i = 0; i < Object.keys(employees).length; i++) {
        console.log(employees[i].name);
        if (userid == employees[i].username && pwd == employees[i].password) {
          console.log("success!!!!");
          window.location.href = "employeelist.html";
          flag = true;
          break;
        }
      }
      if (!flag) {
        alert("Invalid Credentials !");
      }
    }
  };
  xmlHttp.open("GET", "http://localhost:8080/employee", true); // true for asynchronous
  xmlHttp.send(null);
}
