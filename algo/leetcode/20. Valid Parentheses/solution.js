/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(!s || s.length === 0){
        return true;
    }
    let stack = [];
    
    for(let i=0;i<s.length;i++){
        if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
            stack.push(s[i]);
        }
        
        if(s[i] === ')'){
            let val = stack.pop();
            if(val !== '('){
                return false
            }
        }
        
        if(s[i] === '}'){
            let val = stack.pop();
            if(val !== '{'){
                return false
            }
        }
        
        if(s[i] === ']'){
            let val = stack.pop();
            if(val !== '['){
                return false
            }
        }
    }
    
    return (stack.length === 0)
};