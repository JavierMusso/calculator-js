// screen lines
const line1 = document.querySelector(".line-1");
const line2 = document.querySelector(".line-2");

// action buttons
const ac = document.querySelector(".ac");
const del = document.querySelector(".del");
const decimal = document.querySelector(".decimal");

// operation buttons
const equal = document.querySelector(".equal");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const sum = document.querySelector(".sum");
const sub = document.querySelector(".sub");

// num buttons
const num = document.querySelectorAll(".num");

let valor1 = 0;
let valor2 = 0;
let operador = "";

function onlyNumberKey(evt) {
  // Only ASCII character in that range allowed
  var ASCIICode = evt.which ? evt.which : evt.keyCode;
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) return false;
  return true;
}

// listeners
// numbers
for (let n of num) {
  n.addEventListener("click", () => {
    if (line1.value && line1.value != 0) {
      line1.value += n.innerHTML;
    } else {
      line1.value = n.innerHTML;
    }
  });
}

// operators
sum.addEventListener("click", () => {
  if (line1.value != 0) {
    valor1 = line1.value;
  } else {
    valor1 = 0;
  }
  line2.innerHTML = valor1 + " + ";
  line1.value = "";
  operador = "sum";
});

sub.addEventListener("click", () => {
  if (line1.value != 0) {
    valor1 = line1.value;
  } else {
    valor1 = 0;
  }
  line2.innerHTML = valor1 + " - ";
  line1.value = "";
  operador = "sub";
});

multiply.addEventListener("click", () => {
  if (line1.value != 0) {
    valor1 = line1.value;
  } else {
    valor1 = 0;
  }
  line2.innerHTML = valor1 + " * ";
  line1.value = "";
  operador = "multiply";
});

divide.addEventListener("click", () => {
  valor1 = line1.value;
  line2.innerHTML = valor1 + " ÷ ";
  line1.value = "";
  operador = "divide";
});

// action buttons
equal.addEventListener("click", () => {
  let line1Value = line1.value;

  switch (operador) {
    case "sum":
      line2.innerHTML = valor1 + " + " + (line1Value || "0") + " =";
      line1.value = parseFloat(valor1) + parseFloat(line1Value || "0");
      break;
    case "sub":
      line2.innerHTML = valor1 + " - " + (line1Value || "0") + " =";
      line1.value = parseFloat(valor1) - parseFloat(line1Value || "0");
      break;
    case "multiply":
      line2.innerHTML = valor1 + " * " + (line1Value || "0") + " =";
      line1.value = parseFloat(valor1) * parseFloat(line1Value || "0");
      break;
    case "divide":
      if (line1Value != 0) {
        line2.innerHTML = valor1 + " ÷ " + (line1Value || "0") + " =";
        line1.value = parseFloat(valor1) / parseFloat(line1Value || "0");
        break;
      } else {
        line2.innerHTML = valor1 + " ÷ " + (line1Value || "0") + " =";
        line1.value = "Can't divide by 0";
        break;
      }
  }
});

ac.addEventListener("click", () => {
  line2.innerHTML = "";
  line1.value = "";
});

del.addEventListener("click", () => {
  line1.value = "";
});

decimal.addEventListener("click", () => {
  if (line1.value) {
    line1.value += ".";
  } else {
    line1.value = "0.";
  }
});
