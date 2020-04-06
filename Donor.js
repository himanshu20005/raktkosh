function onSubmit() {
  var donor = {
    name: document.getElementById("id101").value,
    age: document.getElementById("id102").value,
    // gender: document.getElementById("gender").value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    address: document.getElementById("id105").value,
    phone: document.getElementById("id104").value,
    bloodgp: document.getElementById("id107").value,
    inventoryRegion: document.getElementById("id108").value
  };
  console.log(donor);

  $.ajax({
    url: "http://localhost:8080/donors",
    type: "post",
    dataType: "json",
    contentType: "application/json",
    success: function(data) {
      console.log("post done");
    },
    data: JSON.stringify(donor)
  });
}
