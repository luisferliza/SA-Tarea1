# SA Tarea 2
### Luis Fernando Lizama - 201602656

Se desarrolló utilizando HTML y JavaScript. Para realizar las peticiones se utilizó ajax y Jquery. Para correr los archivos unicamente es necesario abrir el archivo html. Esta práctica se desarrolló en un navegador con CORS deshabilitados

#### Inciso 1
El código de la solución se encuentra dentro de la carpeta inciso 1 o haciendo clic [en este enlace ](https://github.com/luisferliza/SA-Tarea1/blob/Tarea2/Inciso%201/js/main.js)


```javascript
$.ajax({
        url: url,
        type: 'POST' | 'GET' | 'PUT'| ... | etc, 
        dataType: datatype, 
        data: data, 
        beforeSend: function (request) {
            request.setRequestHeader("Authorization", "Bearer " + token);
        },
        success: function (data) {
            //Manejo de los datos recibidos
        }
    });
```

### Parametros
| Parametro | Descripcion |
| ------ | ------ |
| datatype | Indica que formato tienen los datos que queremos enviar |
| data | Indica la información que deseamos enviar |
| Url | Url al cual realizaremos la petición |
| beforeSend | Indica las cabeceras que se utilizarán antes de realizar la petición, en este caso, la autenticación |

#### Inciso 2
El código de la solución se encuentra dentro de la carpeta inciso 1 o haciendo clic [en este enlace ](https://github.com/luisferliza/SA-Tarea1/blob/Tarea2/Inciso%202/js/main.js)

Envelope para creacion de usuario
```javascript
soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:adm="https://api.softwareavanzado.world/media/redcore/webservices/joomla/administrator.contact.1.0.0.wsdl">
   <soap:Header/>
   <soap:Body>
      <adm:create>
         <name>201602656_soap_usuario10</name>         
      </adm:create>
   </soap:Body>
</soap:Envelope>
```
Envelope para listar usuarios
```javascript
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:adm="https://api.softwareavanzado.world/media/redcore/webservices/joomla/administrator.contact.1.0.0.wsdl">
   <soap:Header/>
   <soap:Body>
      <adm:readList>         
         <filterSearch>201602656</filterSearch>         
         <limit>30</limit>       
      </adm:readList>
   </soap:Body>
</soap:Envelope>
```

Codigo de peticion
```javascript
$.ajax({
        url: url,
        type: 'POST', 
        dataType: datatype,                 
        data: envelope,
        processData: false,
        contentType: "text/xml; charset=\"utf-8\"",
        beforeSend: function (request) {
            request.setRequestHeader("Authorization", "Bearer " + token);
        },
        success: function (data) {
            //Manejo de los datos recibidos
        }
    });
```

### Parametros
| Parametro | Descripcion |
| ------ | ------ |
| datatype | Indica que formato tienen los datos que queremos enviar |
| data | Indica el archivo xml en donde indicamos las operaciones |
| Url | Url al cual realizaremos la petición |
| processData | Evita que se convierta la información en un string |
| contentType | Indica que estamos enviando un xml |
| beforeSend | Indica las cabeceras que se utilizarán antes de realizar la petición, en este caso, la autenticación |

###### *Nota: Para este ejercicio se utilizó un navegador con los CORS deshabilitados. Para mas información visitar [este enlace ](https://alfilatov.com/posts/run-chrome-without-cors/)
