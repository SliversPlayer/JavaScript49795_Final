        // Ruta relativa al archivo JSON local
        const jsonFilePath = 'datos.json';

        function llenarSelect(selectId, opciones) {
            const select = document.getElementById(selectId);

            opciones.forEach(opcion => {
                const option = document.createElement('option');
                option.value = opcion.value;
                option.text = opcion.text;
                select.appendChild(option);
            });
        }

        fetch(jsonFilePath)
          .then(response => {
            if (!response.ok) {
              throw new Error(`Error de red: ${response.statusText}`);
            }
            return response.json();
          })
          .then(data => {
            // Obtener los arrays de opciones del JSON

            const centroCosto = data.centroCosto;
            const tipoDoc = data.tipoDoc;
            const tipoGasto = data.tipoGasto;

            // Llenar los selects con las opciones correspondientes

            llenarSelect('centroCosto', centroCosto);
            llenarSelect('tipoDoc', tipoDoc);
            llenarSelect('tipoGasto', tipoGasto);
          })
          .catch(error => {
            console.error('Error:', error);
          });