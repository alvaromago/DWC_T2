"use strict";

// La tabla con id="age-table"
let table = document.getElementById("age-table");
console.log(table);

// Todos los elementos <label> dentro de esa tabla (debe haber 3 de ellos)
console.log(table.getElementsByTagName("label"));

// El primer <td> en esa tabla (con la palabra "Age")
console.log(table.rows[0].cells[0]);

// El formulario con nombre "search"
let form = document.getElementsByName("search")[0];
console.log(form);

// El primer input en ese formulario.
form.getElementsByTagName("input")[0];

// El último input en ese formulario
let inputs = form.querySelectorAll("input"); // Todos los inputs
console.log(inputs[inputs.length - 1]); // El último
