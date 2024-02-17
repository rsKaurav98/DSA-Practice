const CL = (arr,target)=>{
    let start = 0;
    let end = arr.length -1;
    let CL = -1;

    while (start <= end ){
        let mid = Math.floor ((start + end )/2);

        if(arr[mid]=== target ){
            return arr[mid]
        }
        else if (arr[mid] >= target ){
             
            CL = arr[mid];
            end = mid - 1;
        }else {
            start = mid +1
        }
    }return CL;
}



const arr = [1,12,13,15,17,18,20,23];
 const target = 5;
 const res = CL(arr, target);
 console.log(`The floor of your desired number is ${res} `);