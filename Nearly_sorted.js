const selectedNum  = (arr,target)=>{

    let start = 0;
    let end = arr.length - 1;

    while(start <= end ){
        
        let mid = Math.floor((start + end )/2);

        if(arr[mid]=== target){
            return mid;
        }
        if((mid -1)>=start && arr[mid -1]=== target ){
            return mid - 1;
        }
        if((mid +1)<= end && arr[mid +1]=== target){
            return mid +1;
        }
        else if(target >= arr[mid]){
            start = mid +2;
        }
        else{
            end = mid -2;
        }

    }
    return -1;
}


const arr = [2,3,6,8,20,11,22,25,36,54];
const target = 2;
const res = selectedNum(arr , target );
console.log(`The index of targeted number is ${res} and the number is ${arr[res]}`);