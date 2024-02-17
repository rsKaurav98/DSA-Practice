const NA = (arr , key)=>{
  
    let start = 0 ;
    let end = arr.length -1;
    let NA =-1 ;

    while (start <= end ){
        
        let mid =Math.floor ((start + (end - start)/2));

        if(arr[mid]===key){
            start = mid + 1;
        }else if(arr[mid]>= key){
            NA = arr[mid];
            end = mid - 1;
        }else {
            start = mid + 1 ;
        }
    } return NA ; 

}


const arr = ["a","c","c","f","g","j","k","m","n","n"];
const key = "n";
const nextElement = NA(arr,key);
console.log(`Next element for ${key} in the array is ${nextElement}`);