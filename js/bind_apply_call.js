const book = {
    title: "Brave New World",
    author: "Aldous Huxley",
  };
  
  function summary() {
    this.a = "a";
    console.log(this);
    console.log(`${this.title} was written by ${this.author}.`);
  }
  
  summary.call(book)
  // or:
  summary.apply(book)
  
  summary.bind(book)();
  