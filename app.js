const express = require('express');
const app = express();

app.get('/', (req, res) => {
  return res.sendFile(__dirname + '/index.html');
});

app.get('/product/2218477/REFRIG.PANASONIC-BB64-460L-INOX-220V', (req, res) => {
  return res.sendFile(__dirname + '/producto1.html');
});

app.get('/product/2213288/CELULAR-SAMSUNG-A25-5G-8GB-256GB-AZUL-CL', (req, res) => {
  return res.sendFile(__dirname + '/producto2.html');
});

app.get('/product/2215069/TV-AIWA-43SMART-FULL-HD-AWS-TV-43-BL-02', (req, res) => {
  return res.sendFile(__dirname + '/producto3.html');
});

app.listen(18700, () => {
    console.log('Servidor escuchando en el puerto 18700');
});