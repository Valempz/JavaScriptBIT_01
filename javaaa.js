// let nombreUsuario = "valempz",
//   clave = "123",
//   saldo = 2400258;

// let Usuario = prompt("Ingrese su usuario");
// let password = prompt("Ingrese su clave");

// if (nombreUsuario == Usuario && clave === password) {
//   alert("puedes ingresar");
//   document.write(`su contraseña es correcta, y su saldo es ${saldo}`);
// } else if (clave === password) {
//   alert("No puedes ingresar,contraseña incorrecta");
//   if (clave === password) {
//     alert("2 intentos");
//     Usuario = prompt("Ingrese su usuario");
//     password = prompt("Ingrese su clave");
//   }
//   if (clave === password) {
//     alert("1 intento");
//     Usuario = prompt("Ingrese su usuario");
//     password = prompt("Ingrese su clave");
//   }
// } else {
//   alert("error, cuenta bloqueada");
// }



//intento malo
// if (nombreUsuario == Usuario && clave == password) {
//   alert(`Su saldo es de ${saldo}`);
// } else if (clave !== password || nombreUsuario !== Usuario) {
//   alert("Contraseña o Usuario Invalido, Tienes 2 intentos más");
//   Usuario = prompt("Ingrese su usuario");
//   password = prompt("Ingrese su clave");
//   if (Usuario == nombreUsuario && clave == password) {
//     alert(`Su saldo es de ${saldo}`);
//   } else if (Usuario !== nombreUsuario || clave !== password) {
//     alert("Contraseña o Usuario Invalido, Tienes 1 intentos más");
//     Usuario = prompt("Ingrese su usuario");
//     password = prompt("Ingrese su clave");
//     if (Usuario == nombreUsuario && clave !== password) {
//       alert(`Su saldo es de ${saldo}`);
//     } else if (Usuario !== nombreUsuario || clave !== password) {
//       alert("Contraseña o Usuario Invalido, Tienes 0 intentos más");
//       Usuario = prompt("Ingrese su usuario");
//       password = prompt("Ingrese su clave");
//       if (Usuario == nombreUsuario && clave == password) {
//         alert(`Su saldo es de ${saldo}`);
//       } else {
//         alert("Contraseña o Usuario Invalido, No tienes mas intentos");
//         alert("Tu cuenta sera bloqueada");
//       }
//     }
//   }
// }