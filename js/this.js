this.x = 2;

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
  
  const arrowObject = {
    a: 'b',
    doMoreStuff: () => console.log(this),
    doNothing: function() {
      console.log('this in doNothing ', this);
      let logA = () => {
        console.log('this in logA', this);
      }
      function logB() {
        console.log('this in logB', this);
      }

      logA();
      logB();
    }
  };
  
  arrowObject.doMoreStuff(); // undefined
  arrowObject.doNothing();
  
  
  myObject.doStuff.bind(anotherObject)();

  class A {
    constructor(){
      this.a = 2;
    }

    logFunc(){
      setTimeout(function() {
        this.funct = 3;
        console.log('class log func', this);
      }, 0.5);
    }

    logArrow = () => {
      setTimeout(() => {
        console.log('class log arrow', this);
      }, 0.5);
    }
  }

  const aa = new A();
  aa.logFunc();
  aa.logArrow();