//Nearest greater to Right

function NGR(arr) {
    const result = [];
    const stack = [];
    
    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }
        if (stack.length === 0) {
            result.unshift(-1); 
        } else {
            result.unshift(stack[stack.length - 1]);
        }
        stack.push(arr[i]);
    }
    console.log(stack);
    return result;
}


const arr = [4, 5, 2, 10, 8,12,14,2,1];
console.log(NGR(arr)); 

