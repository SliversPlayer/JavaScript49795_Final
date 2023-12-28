var select = document.getElementById("tipoDoc");

fetch("tipoDoc.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(opcion => {
      var option = document.createElement("option");
      option.value = opcion.value;
      option.text = opcion.text;
      select.appendChild(option);
    });
  })
  .catch(error => console.error("Error al cargar el JSON: " + error));