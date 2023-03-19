var nombreUsuario = "valempz",
  clave = "123",
  saldo = 2400258;
let Usuario = prompt("Ingrese su usuario");
let password = prompt("Ingrese su clave");

if (nombreUsuario == Usuario && clave == password) {
  alert(`Su saldo es de ${saldo}`);
} else if (clave != password || nombreUsuario != Usuario) {
  alert("Contraseña o Usuario Invalido, Tienes 2 intentos más");
  Usuario = prompt("Ingrese su usuario");
  password = prompt("Ingrese su clave");
  if (Usuario == nombreUsuario && clave == password) {
    alert(`Su saldo es de ${saldo}`);
  } else if (Usuario != nombreUsuario || clave != password) {
    alert("Contraseña o Usuario Invalido, Tienes 1 intentos más");
    Usuario = prompt("Ingrese su usuario");
    password = prompt("Ingrese su clave");
    if (Usuario != nombreUsuario && clave != password) {
      alert(`Su saldo es de ${saldo}`);
    } else if (Usuario != nombreUsuario || clave != password) {
      alert("Contraseña o Usuario Invalido, Tienes 0 intentos más");
      Usuario = prompt("Ingrese su usuario");
      password = prompt("Ingrese su clave");
      if (Usuario == nombreUsuario && clave == password) {
        alert(`Su saldo es de ${saldo}`);
      } else {
        alert("Contraseña o Usuario Invalido, No tienes mas intentos");
        alert("Tu cuenta sera bloqueada");
      }
    }
  }
}


//INTENTO 1
// if (nombreUsuario == Usuario && clave == password) {
//   alert("Puedes ingresar :D, tu saldo es de: " + saldo + " pesos ;)");
// } else {
//   alert("Ups! Clave incorrecta, Tienes 3 intentos más :D");
//   Usuario = prompt("Ingrese su usuario");
//   password = prompt("Ingrese su clave");
// }
// if (clave == password) {
//   alert("Puedes ingresar :D, tu saldo es de: " + saldo + " pesos ;)");
// } else {
//   alert("Ups! Clave incorrecta, Tienes 2 intentos más :D");
//   Usuario = prompt("Ingrese su usuario");
//   password = prompt("Ingrese su clave");
// }
// if (Usuario == nombreUsuario) {
//   alert("Puedes ingresar :D, tu saldo es de: " + saldo + " pesos ;)");
// } else {
//   alert("Tienes problemas con tu usuario? :(, te queda 1 intento.");
//   Usuario = prompt("Ingrese su usuario");
//   password = prompt("Ingrese su clave");
// }
// if (nombreUsuario == Usuario) {
//   if (clave == password) {
//     alert("Saldo en cuenta: " + saldo + " pesos");
//   } else {
//     alert("No es tu clave, Tienes 3 intentos");
//     Usuario = prompt("Ingrese su usuario");
//     password = prompt("Ingrese su clave");
//   }
// }else if (clave == password) {
//   alert("No puedes ingresar,contraseña incorrecta");
//   Usuario = prompt("Ingrese su usuario");
//   password = prompt("Ingrese su clave");
//   if (clave == password) {
//     alert("Saldo en cuenta: " + saldo + " pesos");
//   } else {
//     alert("No es tu clave, Tienes 2 intentos");
//     Usuario = prompt("Ingrese su usuario");
//     password = prompt("Ingrese su clave");
//   }
// }else if (Usuario == nombreUsuario) {
//   alert("No puedes ingresar,usuario incorrecta");
//   Usuario = prompt("Ingrese su usuario");
//   password = prompt("Ingrese su clave");
//   if (Usuario == nombreUsuario) {
//     alert("Saldo en cuenta: " + saldo + " pesos");
//   } else {
//     alert("No es tu Usuario, Tienes 1 intentos");
//     Usuario = prompt("Ingrese su usuario");
//     password = prompt("Ingrese su clave");
//   }
// }else{
//   alert("error, cuenta bloqueada");
// }

//INTENTO 2
// if (Usuario == nombreUsuario && clave == password) {
//   alert(`tu saldo es de: ${saldo}`);
// } else if (Usuario !== nombreUsuario || clave !== password) {
//   alert("Usuario o clave incorrecta, consta de 3 intentos");
//   Usuario = prompt("Ingrese su usuario");
//   password = prompt("Ingrese su clave");
// } else if (Usuario !== nombreUsuario || clave !== password) {
//   alert("Usuario o clave incorrecta, consta de 2 intentos");
//   Usuario = prompt("Ingrese su usuario");
//   password = prompt("Ingrese su clave");
// } else if (Usuario !== nombreUsuario || clave !== password) {
//   alert("Usuario o clave incorrecta, consta de 1 intentos");
//   Usuario = prompt("Ingrese su usuario");
//   password = prompt("Ingrese su clave");
// } else {
//   alert("Bloqueo de cuenta");
// }

//OTRO INTENTO 3
// if (nombreUsuario == Usuario && clave == password) {
//   alert(`su contraseña es correcta, y su saldo es ${saldo}`);
// } else if (clave != password) {
//   alert("No puedes ingresar,contraseña incorrecta, solo tienes 3 intentos");
//   if (clave == password) {
//     alert(`su contraseña es correcta, y su saldo es ${saldo}`);
//   } else if (clave != password) {
//     Usuario = prompt("Ingrese su usuario");
//     password = prompt("Ingrese su clave");
//     alert("2 intento");
//   }
//   if (clave != password) {
//     Usuario = prompt("Ingrese su usuario");
//     password = prompt("Ingrese su clave");
//     alert("Cuenta Bloqueada");
//   } else if (Usuario != nombreUsuario) {
//     alert("No puedes ingresar,Usuario incorrecto, solo tienes 3 intentos");
//     if (Usuario = nombreUsuario) {
//       alert(`su contraseña es correcta, y su saldo es ${saldo}`);
//     }
//     if (Usuario != nombreUsuario) {
//       Usuario = prompt("Ingrese su usuario");
//       password = prompt("Ingrese su clave");
//       alert("Advertencia, Ultimo Intento");
//     }
//     if (Usuario != nombreUsuario) {
//       Usuario = prompt("Ingrese su usuario");
//       password = prompt("Ingrese su clave");
//       alert("Cuenta Bloqueada");
//     }
//   } else if (Usuario != nombreUsuario) {
//     alert("No puedes ingresar,Usuario incorrecto, solo tienes 3 intentos");
//     if (Usuario != nombreUsuario) {
//       Usuario = prompt("Ingrese su usuario");
//       password = prompt("Ingrese su clave");
//       alert("Usuario incorrecto, 2 intentos");
//     }
//     if (Usuario != nombreUsuario) {
//       Usuario = prompt("Ingrese su usuario");
//       password = prompt("Ingrese su clave");
//       alert("Advertencia, Ultimo Intento");
//     }
//     if (Usuario != nombreUsuario) {
//       Usuario = prompt("Ingrese su usuario");
//       password = prompt("Ingrese su clave");
//       alert("Cuenta Bloqueada");
//     }
//   }
// }

// intento 4
//if (Usuario == nombreUsuario) {
//   if (clave == password) {
//     alert(`tu saldo es de: ${saldo}`);
//   } else {
//     alert("Incorrecta, tienes 3 intentos mas");
//     Usuario = prompt("Ingrese su usuario");
//     password = prompt("Ingrese su clave");
//   }
// } else {
//   alert("Usuario Incorrecto, 2 intentos");
//   Usuario = prompt("Ingrese su usuario");
//   password = prompt("Ingrese su clave");
//   if (Usuario == nombreUsuario) {
//     if (clave == password) {
//       alert(`tu saldo es de: ${saldo}`);
//     } else {
//       alert("Clave incorrecta, 1 intento");
//       Usuario = prompt("Ingrese su usuario");
//       password = prompt("Ingrese su clave");
//     }
//   } else {
//     alert("Usuario Incorrecto, 2 intentos");
//     if (Usuario == nombreUsuario) {
//       if (clave == password) {
//         alert(`tu saldo es de: ${saldo}`);
//       } else {
//         alert("clave incorrecta, 0 intentos");
//         Usuario = prompt("Ingrese su usuario");
//         password = prompt("Ingrese su clave");
//       }
//     }else{
//       alert("Bloqueo cuenta");
//     }
//   }
// }
