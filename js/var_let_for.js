for (var i = 0; i < 4; i++) { // global scope
    setTimeout(() => console.log(i));
  }
  
  for (let i = 0; i < 4; i++) { // block scope
    setTimeout(() => console.log(i));
  }
  