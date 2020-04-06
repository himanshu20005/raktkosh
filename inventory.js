window.onload = function() {
  var xmlHttp = new XMLHttpRequest();
  var table = "<table><tr><th>Blood Group</th><th>Units</th></tr>";
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      var inventory = JSON.parse(xmlHttp.responseText);
      console.log(inventory);
      for (var i = 0; i < Object.keys(inventory).length; i++) {
        table +=
          "<tr>" +
          "<td>" +
          inventory[i].bloodGroup +
          "</td>" +
          "<td>" +
          inventory[i].unit +
          "</td></tr>";
      }
      table += "</table>";
      document.getElementById("table").innerHTML = table;
    }
  };
  xmlHttp.open(
    "GET",
    "http://localhost:8080/inventorycontroller/invetory",
    true
  ); // true for asynchronous
  xmlHttp.send(null);
};
