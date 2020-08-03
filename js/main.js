function showAllContacts(evt) {
    openTab(evt, 'contacts')

}


function getContacts() {
    let url = "https://api.softwareavanzado.world/index.php?"
        + 'option=contact'
        + '&webserviceVersion=1.0.0'
        + '&webserviceClient=administrator'
        + '&filter[search]=201602656'
        + '&api=hal';
    $.ajax({
        type: 'GET',
        url: url,
        crossDomain: false,
        success: function (data) {
            let response = JSON.parse(data);
            if (response._embedded) {
                let tableBuilder = `<tr>
                                        <th>ID</th>
                                        <th>Nombre</th>
                                    </tr>`;

                response._embedded.item.forEach(element => {
                    tableBuilder += `<tr>
                                        <td>${element.id}</td>
                                        <td>${element.name}</td>
                                    </tr>`
                });
                document.getElementById('contactsList').innerHTML = tableBuilder;
            } else {
                alert("Error. Datos recibidos no tienen un formato válido")
            }
        }
    });
}

function createContact() {
    let contactName = document.getElementById('nameInput').value;
    $.ajax({
        url: "https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal",
        type: 'POST',
        dataType: 'json',
        data: JSON.stringify({ name: contactName }),
        success: function (data) {
            console.log(data)
            alert('Usuario creado correctamente!');
        }
    });
}
