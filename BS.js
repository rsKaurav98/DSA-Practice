
const Last_Occurrence = (arr , target )=>{
    let start = 0;
    let end = arr.length - 1;
    let res = -1;

    while (start <= end ){
        
        let mid = Math.floor(start + (end - start)/2);
        if(arr[mid]=== target){
            res = mid;
            start = mid+1;
        }else if(arr[mid]< target){
            start = mid +1;

        }else{
            end = mid - 1;
        }

    }
    return res;
}

const arr = [1,2,5,8,15,22,22,22,25,55];
const target = 22;
const result = Last_Occurrence(arr , target);
console.log(`The desired index is ${result}`);