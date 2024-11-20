# Russel Brian Martinez Veloz (2021-1742)

## Acciones para ejecutar el proyecto

Abrir la terminal una vez clonado el proyecto y proceder con las siguientes acciones:

### 1. Se debe ejecutar el siguiente comando para instalar los paquetes de node.

```
npm install
```

### 2. Se debe ejecutar el siguiente comando para iniciar el proyecto.

```
npm start
```

## Acciones para probar el proyecto una vez configurado desde la consola

### 1. Se puede copiar el siguiente enlace para obtener todos los contactos.
```
curl -X GET http://localhost:5001/get
```
### 2. Se puede copiar el siguiente enlace para crear un contacto (Modificar los valores de las propiedades según preferencia). 
```
curl -X POST http://localhost:5001/post -H "Content-Type: application/json" -d '{"nombre": "", "apellido": "", "telefono": ""}'
```
## Si desea puede realizar estas mismas acciones desde un manejador de peticiones como Postman

### 1.  GET
URL
```
http://localhost:5001/get
```

### 2.  POST
URL
```
http://localhost:5001/post
```
HEADERS
```
Content-Type: application/json
```
Body (JSON)
```
{
    "nombre": "",
    "apellido": "",
    "telefono": ""
}
```
