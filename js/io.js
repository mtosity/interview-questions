process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
process.stdin.on("data", function (input) {
  stdin_input += input;
});
process.stdin.on("end", function () {
  main(stdin_input);
});

const insert = (arr, index, newItem) => [
  // part of the array before the specified index
  ...arr.slice(0, index),
  // inserted item
  newItem,
  // part of the array after the specified index
  ...arr.slice(index),
];

function main(input) {
  var data = input.split("\n");
  let [n_str, q_str] = data[0];
  let n = parseInt(n_str),
    q = parseInt(q_str);

  let vertices = data[1].split(" ").map((str) => parseInt(str));
  let hash = {},
    edges = [];

  for (let i = 0; i < n; i++) {
    hash[i + 1] = vertices[i];
  }

  for (let i = 0; i < q; i++) {
    let query = data[i + 2].split(" ").map((str) => parseInt(str));
    if (query[0] === 1) {
      let haved = false;
      for (let j = 0; j < edges.length; j++) {
        let idx = edges.indexOf(query[1]);
        if(idx !== -1){
            
        }
      }
    }
  }
}
