# Sobre el repo
Actividad de Taller de Nuevas Tecnologías de la UNTDF. El repo tiene una "app" super simple hecha con [Express](https://expressjs.com/). 

## Instrucciones
- Instalar [NodeJs](https://nodejs.org) y [npm](https://www.npmjs.com) (normalmente se instalan juntos).
- Instalar las dependencias con usando el comando 
```bash
npm i
```
- levantar el server con el comando
```bash
npm start
```
- Si todo funcionó bien deberían poder acceder a la url `http://localhost:3000/` y ver un texto que dice `Logrado!`

## Con Docker
```bash
docker build -t untdf-01-01 .
docker run --rm untdf-01-01
```

Si no para al ejecutar Ctrl+C, usar:
```bash
docker ps # copiar el CONTAINER ID
docker stop CONTAINER_ID
```