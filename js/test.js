function main(input) {
  var data = input.split("\n");
  let n = parseInt(data[0]);

  let result = 0;
  for (let i = 1; i < n+1; i++) {
    let [lucky, salary_str] = data[i].split(" ");
    let salary = parseInt(salary_str),
      n_lucky = lucky.length;

    let hash_char = {};
    for (let j = 0; j < n_lucky; j++) {
      if (hash_char[lucky[j]]) {
        hash_char[lucky[j]]++;
      } else {
        hash_char[lucky[j]] = 1;
      }
    }

    let xmau = 1;
    for (let c in hash_char) {
      xmau *= n_n(hash_char[c]);
    }
    let x = n_n(n_lucky) / xmau;

    let gift = (Math.pow(salary, x));
    if (gift > (20000192000019)) {
      gift = (20000192000019);
    }

    result += gift;
  }

  process.stdout.write(result.toString());
}
