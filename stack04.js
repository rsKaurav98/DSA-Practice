//Nearest smaller to left 

const NSR =(arr)=>{
    let n = arr.length - 1;
   let stack = [];
   let result = [];

   for (let i =n;i>=0 ; i -- ){
       while(stack.length > 0 && stack[stack.length -1 ] >= arr[i]) {
           stack.pop();
       }

       if(stack.length ===0){
           result.unshift(-1)
       }else 
       {
           result.unshift(stack[stack.length - 1]);
          
       }

       stack.push(arr[i])
   }
   return result;
}

const arr = [1,5,2,0,11,16,4];
console.log(NSR(arr));