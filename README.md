# Tarea 1
### Luis Fernando Lizama - 201602656

Se desarroló utilizando HTML y JavaScript. Para realizar las peticiones se utilizó ajax. El código de la solución puede encontrarse en la carpeta js o haciendo clic  [en este enlace ](https://github.com/luisferliza/SA-Tarea1/blob/master/js/main.js)

```javascript
$.ajax({
        url: url,
        type: 'POST' | 'GET' | 'PUT'| ... | etc, 
        dataType: datatype, 
        data: data, 
        success: function (data) {
            //Manejo de los datos recibidos
        }
    });
```

### Parametros
| Parametro | Descripcion |
| ------ | ------ |
| datatype | Indica que formato tienen los datos que queremos enviar |
| data | Indica la informacion que deseamos enviar |
| url | url al cual realizaremos la peticion |

## Crear un contacto

La URL a la que se realizaban las peticiones fue la siguiente:
``` 
https://api.softwareavanzado.world/index.php?webserviceClient=administrator&webserviceVersion=1.0.0&option=contact&api=hal
``` 
### Parametros
| Parametro | Descripcion |
| ------ | ------ |
| Name | Indica el nombre del contacto que se desea crear |


## Listar Contactos

La URL a la que se realizaban las peticiones fue la siguiente:
``` 
https://api.softwareavanzado.world/index.php?option=contact&webserviceVersion=1.0.0&webserviceClient=administrator&api=hal&filter[search]={FILTER}
```
### Parametros
| Parametro | Descripcion |
| ------ | ------ |
| FILTER | Indica el filtro que queremos colocar. En este caso, el número de carné |

###### *Nota: Para este ejercicio se utilizó un navegador con los CORS deshabilitados. Para mas información visitar [este enlace ](https://alfilatov.com/posts/run-chrome-without-cors/)