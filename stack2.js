
//Nearest greater to Left 

function NGL(arr) {
    const result = [];
    const stack = [];
    
    for (let i = 0; i < arr.length ; i++) {
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }
        if (stack.length === 0) {
            result.push(-1); 
        } else {
            result.push(stack[stack.length - 1]);
        }
        stack.push(arr[i]);
    }
    
    return result;
}


const arr = [1,3,2,4];
console.log(NGL(arr)); 

