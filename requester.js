function onSubmit() {
  var requestor = {
    name: document.getElementById("id001").value,
    age: document.getElementById("id002").value,
    address: document.getElementById("id003").value,
    phone: document.getElementById("id004").value,
    bloodgp: document.getElementById("id005").value,
    inventoryRegion: document.getElementById("id006").value
  };
  console.log(requestor);
  $.ajax({
    url: "http://localhost:8080/requester",
    type: "post",
    dataType: "json",
    contentType: "application/json",
    success: function(data) {
      console.log("post done");
      updateBlood();
    },
    data: JSON.stringify(requestor)
  });
}

function updateBlood() {
  console.log("hbiab");
  units = document.getElementById("unit").value;
  var bloodUpdate = {
    units: units,
    bloodGroup: document.getElementById("id005").value,
    isAdd: false
  };
  $.ajax({
    url: "http://localhost:8080/inventorycontroller/bloodGroupUpdate",
    type: "put",
    dataType: "json",
    contentType: "application/json",
    success: function(data) {
      console.log("put done");
    },
    data: bloodUpdate
  });
}
