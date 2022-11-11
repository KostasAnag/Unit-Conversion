let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  
  let num = document.getElementById("inputField").value;

  
  document.getElementById("length").innerHTML = `${num} meters = ${
    (num * 3.281).toFixed(3)
  } feet | ${num} feet = ${(num / 3.281).toFixed(3)} meters`;

  document.getElementById("volume").innerHTML = `${num} liters = ${
    (num * 0.264).toFixed(3)
  } gallons | ${num} gallons = ${(num / 0.264).toFixed(3)
  } liters`;
  document.getElementById("mass").innerHTML = `${num} kilos = ${
    (num * 2.204).toFixed(3)
  } pounds | ${num} pounds = ${(num / 2.204).toFixed(3)} kilos`;

});

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
