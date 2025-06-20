// 1. Mensaje en la consola
console.log("¡Hola, Yassit! JavaScript está funcionando ✨");

// 2. Mostrar alerta (prueba rápida)
alert("Bienvenido a mi portafolio interactivo");

// 3. Variables básicas
let nombre = "Yassit";
const año = 2025;
console.log(`Hola ${nombre}. Estamos en ${año}.`);
// Espera a que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("saludo");
  btn.addEventListener("click", () => {
    alert("¡Hola, gracias por visitar mis proyectos!");
  });
});
