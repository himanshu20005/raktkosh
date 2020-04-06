window.onload = function() {
  var xmlHttp = new XMLHttpRequest();
  var table =
    "<table><tr><th>Name</th><th>Age</th><th>Address</th><th>Phone No.</th><th>Blood Group</th><th>Gender</th></tr>";
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      var donor = JSON.parse(xmlHttp.responseText)._embedded.donors;
      console.log(donor);
      for (var i = 0; i < Object.keys(donor).length; i++) {
        table +=
          "<tr>" +
          "<td>" +
          donor[i].name +
          "</td>" +
          "<td>" +
          donor[i].age +
          "</td>" +
          "<td>" +
          donor[i].address +
          "</td>" +
          "<td>" +
          donor[i].phone +
          "</td>" +
          "<td>" +
          donor[i].bloodgp +
          "</td>" +
          "<td>" +
          donor[i].gender +
          "</td></tr>";
      }
      table += "</table>";
      document.getElementById("table").innerHTML = table;
    }
  };
  xmlHttp.open("GET", "http://localhost:8080/donors", true); // true for asynchronous
  xmlHttp.send(null);
};
