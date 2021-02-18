this.haha = 2;

const obj = {
  a: 2,
  funcc: function(){
    let norFunc = (function(){
      console.log('norFunc', this);
    }).bind(this)
    let arrFunc = () => {
      console.log('arrow', this);
    }

    norFunc();
    arrFunc();
  },

  another: (function() {console.log(this)}).bind(this)
}

obj.funcc();
obj.another();
