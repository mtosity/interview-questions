const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Third");

bar();
foo();
baz();

//https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=870s