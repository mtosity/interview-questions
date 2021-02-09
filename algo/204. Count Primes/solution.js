/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let b = [];
    for(let i=0;i<n;i++){
        b.push(true);
    }
    
    for(let i=2;i*i<n;i++){
        if(b[i]){
            for(let j=i;j*i<n;j++){
                b[j*i] = false;
            }
        }
    }
    
    
    let re = 0;
    for(let i=2;i<n;i++){
        if(b[i]){
            re++;
        }
    }
    return re;
};