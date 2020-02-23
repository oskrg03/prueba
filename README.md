## Introducción

El objetivo del presente caso es presentar una situación que podría darse en la realidad del puesto de "Frontend Developer"

## Contexto del Caso

En [BNEXT](https://bnext.es) (uno de las empresas líderes en NEOBANCOS, donde somos socios de negocio. Si quieres descargarte la APP y probarla te regalamos 5€ en este [Link](https://share.bnext.es/1706989576)) queremos desarrollar una pequeña WEBAPP que pueda ser integrada en su aplicación Móvil para permitir solicitar un préstamo. Para ello vamos a entregar una pequeña WebApp responsive para poder registrar los datos del usuario. La aplicación la llamaremos en una URL que nos dará el desarrollador **{url}/partner_test.html?id={numero}** 

El parámetro "número" le dirá a la WebApp que debe llamar a un API:

[GET] [https://api.bnext.io/partner_test](https://api.bnext.io/partner_test)/user ?id={numero} | números válidos: 1 y 2

    Headers a enviar:
    X-WEB-KEY = 'Development'
    
    Parámetros a enviar 
    id = {número}
    
    Repuesta: Status 200
    {
      "status":200,
      "code":"ok"
    	"data" {
         "id": {numero},
    	   "name":"nombre de usuario",
    	   "surname":"appellido usuario",
    	   "email":"test@test.com",
    	   "phone": "número de teléfono",
    	   "age": {entero}
    	}
    }
    Repuesta: Status 404
    {
      "status":404,
      "code":"not-found"
    }
    
    
    
  ## Link de la WebAPP: https://prueba-bnext-ec53c.firebaseapp.com/
   
   
   
   para consultar se tienen dos rutas:
   ##### https://prueba-bnext-ec53c.firebaseapp.com//home?id={numero}
   #####  https://prueba-bnext-ec53c.firebaseapp.com//partner_test.html?id={numero} 
   
  ## Tecnologías que se utilizaron
    - Ionic 4
    - Angular 
    - Typescript
    - API rest
    - JSON
    
  ## Herramientas que se utilizaron
    - Visual studio Code
    - Postman
    - Navegador Google Chrome
    - Internet
   
   
   ## Resumen del proyecto
   
   Se realizó una WPA utilizando las tecnologías mencioandas anteriormente. Inicialmente se obtiene el número de la url 
   y realiza una petición get a la API suministrada, la cual como respuesta nos da las dos posibles opciones que se muestran en el caso. 
   Luego que se obtiene una respuesta, se verifica el status de dicha respuesta, en caso de ser 200, es decir, respuesta con datos asociados,
   estos se muestran en un formulario para solicitud de un prestamo. Por el contrario, si este status es 404 o no se proporciona valor 
   alguno en la url correspondiente a el id, se procede a visualizar una pantalla con un mensaje de error. 
   
   En el código se explica que se hizo en cada caso. los archivos más relevantes son: 
   - home.page.ts en el cual se hacen las validaciones iniciales, se hace la petición get y se realizan acciones según la respuesta.
   - auth-successful.page.ts  en el cual se optiene la información del usuario y se muestra en el formulario para solicitud de prestamo.
   - http.ts es es servicio que se conecta a la API y obtiene una respuesta.
   
   
   
   
   
   
   
   
