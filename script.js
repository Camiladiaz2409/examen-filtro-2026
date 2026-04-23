
document.getElementById("challenge-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("challenger-name").value.trim();
  const clase = document.getElementById("challenger-class").value.trim();
  const nivel = document.getElementById("challenger-level").value;

  if (!name || !clase || !nivel) {
    // Limpia mensajes anteriores
    document.querySelectorAll("#challenge-form p").forEach(p => p.remove());

    // Mensaje en consola
    console.log("⚠️ Completa todos los campos antes de inscribirte.");

    // Mensaje visible en el formulario
    document.getElementById("challenge-form").insertAdjacentHTML(
      "beforeend",
      "<p style='color:#e94560;'>⚠️ Completa todos los campos antes de inscribirte.</p>"
    );
  } else {
    console.log(`✅ ${name} (${clase}, nivel ${nivel}) inscrito al torneo.`);
  }
});

