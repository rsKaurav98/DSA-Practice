

const SSP =(arr)=>{
    let n = arr.length - 1 ;
    let stack = [];
    let result=[];

    for (let i = 0 ; i<=n ; i++){
        while(stack.length > 0 && stack[stack.length - 1] <= arr[i]){
            stack.pop();
        }

        if(stack.length === 0){
            result.push(1);
        }
        else{
            result.push(i - (arr.indexOf(stack[stack.length - 1])))
        }

        stack.push(arr[i])
    }
    return result;
}
const arr =[100,80,60,70,60,75,85];
console.log(SSP(arr));