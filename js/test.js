var sumEvenAfterQueries = function(A, queries) {
  let sum = A.reduce((result, current) => {
      result += current;
      return result;
  }, 0);
  
  
  for(let i=0;i<queries.length;i++){
      let [val, index] = queries[i];
  console.log(val, index);
      
      if(A[index] % 2 === 0 && val % 2 === 0){
          sum += val;
      }
      
      if(A[index] % 2 !== 0 && val % 2 !== 0){
          sum += (A[index] + val);
      }
      
      if(A[index] % 2 === 0 && val % 2 !== 0){
          sum -= A[index];
      }
      
      A[index] += val;
  }
  
  return sum;
};

console.log(sumEvenAfterQueries([1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]]));

