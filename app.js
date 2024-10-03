const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

// Ruta de ejemplo
app.get("/", (req, res) => {
  res.send("¡Hola, Fly.io está funcionando correctamente!");
});

// El servidor escucha en el puerto 8080 y todas las interfaces de red
app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor ejecutándose en http://0.0.0.0:${port}`);
});
