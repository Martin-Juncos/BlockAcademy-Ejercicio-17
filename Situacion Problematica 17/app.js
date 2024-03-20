const http = require("http");
const port = 3000;
const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/registro") {
    // Procesar solicitud de registro
    registrarUsuario(req, res);
  } else if (req.method === "POST" && req.url === "/inicio-sesion") {
    // Procesar solicitud inicio de sesion
    iniciarSesion(req, res);
  } else {
    // Ruta no valida
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Ruta no encontrada");
  }
});
server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
// Funcion para procesar solicitud de registro
function registrarUsuario(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Usuario registrado con exito!");
}
// Funcion para procesar solicitud de inicio de sesion
function iniciarSesion(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Inicio de sesion exitoso!");
}
