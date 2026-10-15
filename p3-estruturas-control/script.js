const pedidos = [
  { cliente: "Ana", importe: 15, metodoPago: "VISA" },
  { cliente: "Brais", importe: 42, metodoPago: "PAYPAL" },
  { cliente: "Carla", importe: 75, metodoPago: "VISA" },
  { cliente: "Diego", importe: 0, metodoPago: "EFECTIVO" },
  { cliente: "Eva", importe: 120, metodoPago: "PAYPAL" }
];

let totalPedidosValidos = 0;
let importeTotal = 0;

// Partes 1, 2, 3 e 4: clasificar, indicar o método de pago e contar pedidos válidos.
for (const pedido of pedidos) {
  if (pedido.importe <= 0) {
    console.log(`Pedido de ${pedido.cliente} ignorado: importe non válido`);
    continue;
  }

  let categoria;

  if (pedido.importe < 20) {
    categoria = "Pedido pequeno";
  } else if (pedido.importe <= 50) {
    categoria = "Pedido medio";
  } else {
    categoria = "Pedido grande";
  }

  console.log(`${pedido.cliente} - ${pedido.importe} EUR - ${categoria}`);

  switch (pedido.metodoPago) {
    case "VISA":
      console.log("Pago con tarxeta");
      break;
    case "PAYPAL":
      console.log("Pago con PayPal");
      break;
    case "EFECTIVO":
      console.log("Pago en efectivo");
      break;
    default:
      console.log("Método de pago descoñecido");
  }

  totalPedidosValidos++;
  importeTotal += pedido.importe;
}

console.log(`Pedidos válidos: ${totalPedidosValidos}`);
console.log(`Importe total: ${importeTotal} EUR`);

// Parte 5: buscar o primeiro pedido superior a 100 EUR.
for (const pedido of pedidos) {
  if (pedido.importe > 100) {
    console.log(`Primeiro pedido superior a 100 EUR: ${pedido.cliente}`);
    break;
  }
}

// Parte 6: menú que se repite ata seleccionar a opción 3.
let opcion;

do {
  opcion = prompt(
    "MENÚ\n" +
    "1. Ver número de pedidos válidos\n" +
    "2. Ver importe total\n" +
    "3. Saír\n\n" +
    "Escolle unha opción:"
  );

  switch (opcion) {
    case "1":
      console.log(`Pedidos válidos: ${totalPedidosValidos}`);
      break;
    case "2":
      console.log(`Importe total: ${importeTotal} EUR`);
      break;
    case "3":
      console.log("Saíndo do menú...");
      break;
    default:
      console.log("Opción non válida. Escolle 1, 2 ou 3.");
  }
} while (opcion !== "3");
