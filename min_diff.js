const min_diff =(arr,key)=>{
    let start = 0;
    let end = arr.length - 1 ;

    while(start <= end ){

        let mid = Math.floor(start + (end - start)/2);

        if (key === arr[mid]){
            return mid ;
        }
        else if(arr[mid] >= key ){
            end = mid - 1;
        }
        else {
            start = mid +1;
        }
    
        
    }
  let diff1 =   Math.abs(key - arr[end]);
  let diff2 = Math.abs(key - arr[start])

  return diff1 > diff2 ? {index:start } : { index:end };


}

const arr = [ 1,2,3,5,6,9,10,17,18,20,25,112];
const res = min_diff(arr ,0);
console.log(res);