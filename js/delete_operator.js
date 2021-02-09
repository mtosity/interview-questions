let a = 2, b = { c: '2' }
delete a;
delete b.c;
console.log(a);
console.log(b);