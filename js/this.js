const myObject = {
    a: 'b',
    b: 'c',
    doStuff: function() {
      // Ở đây this sẽ trỏ tới myObject
      console.log(this.a + this.b);
    }
  }
  
  myObject.doStuff(); // bc
  
  // BUT:
  const anotherObject = {
    a: 'abacaba',
    b: '!'
  };
  anotherObject.doStuff = myObject.doStuff;
  anotherObject.doStuff(); // abacaba!
  
  // Ở Arrow functions ko có 'this' nên nó tham chiếu ra bên ngoài
  const arrowObject = {
    a: 'b',
    // Ở đây, 'this' trỏ ra bên ngoài function nên nó ko lấy dc gía trị của a
    doMoreStuff: () => console.log(this.a)
  };
  
  arrowObject.doMoreStuff(); // undefined
  
  
  myObject.doStuff.bind(anotherObject)();