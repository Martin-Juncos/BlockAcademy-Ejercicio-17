const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    // Configurar encabezados CORS para permitir solicitudes desde cualquier origen
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Ruta raíz: responder con un mensaje de saludo
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('¡Hola, mundo!');
  } else {
    // Ruta no válida
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Ruta no encontrada');
  }
});

server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
