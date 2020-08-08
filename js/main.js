function getSecret() {
    let url =  'https://api.softwareavanzado.world/index.php?'
                + 'option=token'
                + '&api=oauth2'                
    $.ajax({
        type: 'POST',
        url: url,        
        data : {
            "grant_type" : "client_credentials",
            "client_id" : "sa",
            "client_secret":"fb5089840031449f1a4bf2c91c2bd2261d5b2f122bd8754ffe23be17b107b8eb103b441de3771745"        
            },
        success: function (data) {
            console.log(data)
        }
    });
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
