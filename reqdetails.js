window.onload = function() {
  var xmlHttp = new XMLHttpRequest();
  var table =
    "<table><tr><th>Name</th><th>Age</th><th>Address</th><th>Phone No.</th><th>Blood Group</th><th>Inventory Region</th></tr>";
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      var requester = JSON.parse(xmlHttp.responseText)._embedded.requesters;
      console.log(requester);

      for (var i = 0; i < Object.keys(requester).length; i++) {
        table +=
          "<tr>" +
          "<td>" +
          requester[i].name +
          "</td>" +
          "<td>" +
          requester[i].age +
          "</td>" +
          "<td>" +
          requester[i].address +
          "</td>" +
          "<td>" +
          requester[i].phone +
          "</td>" +
          "<td>" +
          requester[i].bloodgp +
          "</td>" +
          "<td>" +
          requester[i].inventoryRegion +
          "</td></tr>";
      }
      table += "</table>";
      document.getElementById("table").innerHTML = table;
    }
  };
  xmlHttp.open("GET", "http://localhost:8080/requester", true); // true for asynchronous
  xmlHttp.send(null);
};
