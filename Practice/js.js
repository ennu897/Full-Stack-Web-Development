let globalAge = 23;

function printAge(age) {
  var varAge = 34;

  if (age > 0) {
    const constAge = age * 2;  // ✅ Exists only inside this block
    console.log(constAge);     // Works fine
  }

  // console.log(constAge);       // ❌ ReferenceError (constAge not defined)
}



printAge(globalAge);
// console.log(varAge);
// console.log(constAge); 