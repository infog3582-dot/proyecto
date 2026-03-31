function login() {
  let u = document.getElementById("usuario").value;
  let p = document.getElementById("password").value;

  if (u === "" || p === "") {
    document.getElementById("mensaje").innerText = "Campos obligatorios";
    return;
  }

  if (u === "admin" && p === "123") {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("mensaje").innerText = "Credenciales incorrectas";
  }
}

function registrar() {
  let u = document.getElementById("nuevoUsuario").value;
  let c = document.getElementById("correo").value;

  if (u === "" || c === "") {
    document.getElementById("mensajeRegistro").innerText = "Campos obligatorios";
  } else {
    document.getElementById("mensajeRegistro").innerText = "Registro exitoso";
  }
}

function logout() {
  window.location.href = "index.html";
}
