// Planilla de stock

// Stock al 11/07

let cantCuadros= 10;
let cantTazas= 30;
let cantJarros= 32;
let cantRemeras= 12;

console.log("Planilla de stock actual");
console.log("Cuadros = " +cantCuadros);
console.log("Tazas = " +cantTazas);
console.log("Jarros = " +cantJarros);
console.log("Remeras = " +cantRemeras);

let ingresoDeCuadros = parseInt(prompt("Ingreso de cuadros"));
let stockActualCuadros = cantCuadros + ingresoDeCuadros;
alert("La cantidad actual de cuadros es " +stockActualCuadros);

let ingresoDeTazas = parseInt(prompt("Ingreso de Tazas"));
let stockActualTazas = cantTazas + ingresoDeTazas;
alert("La cantidad actual de Tazas es " +stockActualTazas);

let ingresoDeJarros = parseInt(prompt("Ingreso de Jarros"));
let stockActualJarros = cantJarros + ingresoDeJarros;
alert("La cantidad actual de Jarros es " +stockActualJarros);

let ingresoDeRemeras = parseInt(prompt("Ingreso de Remeras"));
let stockActualRemeras = cantRemeras + ingresoDeRemeras;
alert("La cantidad actual de cuadros es " +stockActualRemeras);



let ventaDeCuadros = parseInt(prompt("Egreso de cuadros"));
stockActualCuadros = stockActualCuadros - ventaDeCuadros;
alert("La cantidad actual de cuadros es " +stockActualCuadros);

let ventaDeTazas = parseInt(prompt("Egreso de Tazas"));
stockActualTazas = stockActualTazas - ventaDeTazas;
alert("La cantidad actual de Tazas es " +stockActualTazas);

let ventaDeJarros = parseInt(prompt("Egreso de Jarros"));
stockActualJarros = stockActualJarros - ventaDeJarros;
alert("La cantidad actual de Jarros es " +stockActualJarros);

let ventaDeRemeras = parseInt(prompt("Egreso de Remeras"));
stockActualRemeras = stockActualRemeras - ventaDeRemeras;
alert("La cantidad actual de Remeras es " +stockActualRemeras);


console.log("Planilla de stock actualizada");
console.log("Cuadros = " +stockActualCuadros);
console.log("Tazas = " +stockActualTazas);
console.log("Jarros = " +stockActualJarros);
console.log("Remeras = " +stockActualRemeras);