
let url = "https://api.softwareavanzado.world/index.php?"
    + 'option=contact'
    + '&webserviceVersion=1.0.0'
    + '&webserviceClient=administrator'
    + '&api=soap';


function getContacts() {



    let envelope = '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" '
        + 'xmlns:adm="https://api.softwareavanzado.world/media/redcore/webservices/joomla/administrator.contact.1.0.0.wsdl">'
        + '<soap:Header/>'
        + '<soap:Body>'
        + '<adm:readList>'
        + '<filterSearch>201602656</filterSearch>'
        + '<limit>30</limit>'
        + '</adm:readList>'
        + '</soap:Body>'
        + '</soap:Envelope>'

    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'xml',
        data: envelope,
        processData: false,
        contentType: "text/xml; charset=\"utf-8\"",
        beforeSend: function (request) {
            request.setRequestHeader("Authorization", "Basic " + btoa("sa:usac"));
        },
        success: function (data) {
            if (data) {
                let arr = data.getElementsByTagName("list")[0];
                let tableBuilder = `<tr>
                                        <th>ID</th>
                                        <th>Nombre</th>
                                    </tr>`;
                for (let t = 0; t < arr.childNodes.length; t++) {
                    tableBuilder += `<tr>
                                        <td>${arr.childNodes[t].childNodes[0].childNodes[0].data}</td>
                                        <td>${arr.childNodes[t].childNodes[4].childNodes[0].data}</td>
                                    </tr>`

                }
                document.getElementById('contactsList').innerHTML = tableBuilder;
                console.log(arr.childNodes.length)
            }

        }
    });

    
}

function createContact() {
    let contactName = document.getElementById('nameInput').value;

    let envelope = '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" '
        + 'xmlns:adm="https://api.softwareavanzado.world/media/redcore/webservices/joomla/administrator.contact.1.0.0.wsdl">'
        + '<soap:Header/>'
        + '<soap:Body>'
        + '<adm:create>'
        + '<name>' + contactName + '</name>'
        + '</adm:create>'
        + '</soap:Body>'
        + '</soap:Envelope>'

    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'xml',
        data: envelope,
        processData: false,
        contentType: "text/xml; charset=\"utf-8\"",
        beforeSend: function (request) {
            request.setRequestHeader("Authorization", "Basic " + btoa("sa:usac"));
        },
        success: function (data) {
            console.log(data)
            alert('Usuario creado correctamente!');
        }
    });
}
