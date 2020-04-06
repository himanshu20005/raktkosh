window.onload = function() {
  var xmlHttp = new XMLHttpRequest();
  var table =
    "<table><tr><th>Employee ID</th><th>Name</th><th>Address</th><th>Phone No.</th></tr>";
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      var employees = JSON.parse(xmlHttp.responseText)._embedded.employees;
      console.log(employees);
      for (var i = 0; i < Object.keys(employees).length; i++) {
        table +=
          "<tr>" +
          "<td>" +
          i +
          "</td>" +
          "<td>" +
          employees[i].name +
          "</td>" +
          "<td>" +
          employees[i].address +
          "</td>" +
          "<td>" +
          employees[i].phone +
          "</td></tr>";
      }
      table += "</table>";
      document.getElementById("table").innerHTML = table;
    }
  };
  xmlHttp.open("GET", "http://localhost:8080/employee", true); // true for asynchronous
  xmlHttp.send(null);
};
