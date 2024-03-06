//Finding and element in Bi-tonic sorted array , Bi-tonic sorted array is on e where no next element is similar , first the elements are in increasing order and after reaching a maximum number (peak) they start decreasing.


// In solution we will simply find the peak of the array first and break the original array from there , now we will have two arrays , one which is sorted in increasing order and other that is sorted in decreasing order , we will simply apply binary search on both the arrays and find the index of the targeted element.



//Code find Peak of the array ----
const Peak =(arr , start , end )=>{
   
    while (start < end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (mid > 0 && mid < end) {
            if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
                return mid;
            } else if (arr[mid - 1] > arr[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } 
        else if (mid === 0) {
            if (arr[mid] > arr[mid + 1]) {
                return mid;
            }
            else 
            return mid + 1;
                          
        } 
        else if (mid === end) {
            if (arr[mid] > arr[mid - 1]) {
                return mid;
            }
            else return mid - 1;
        }
    } return start; 
}

//Binary Search on Increasingly sorted array 

const BSA = (arr , start , end , target)=>{

    while (start <= end){
        let mid = Math.floor((start + end)/2);
      if(arr[mid]=== target){
        return mid;
      }else if(arr[mid]<= target){
         start = mid +1;
      }else{
        end = mid-1;
      }
        
    }return -1;

}

//Binary Search on Decreasingly sorted array 

const BSD = (arr , start , end , target )=>{
    
    while (start <= end){
        let mid = Math.floor((start + end)/2);
      if(arr[mid]=== target){
        return mid;
      }else if(arr[mid]<= target){
         end = mid -1;
      }else{
        start = mid+1;
      }
        
    }return -1;
}

const main = ()=>{
    const arr = [5,9,10,14,55,22,12,6];
    const target = 5;
    const start = 0;
    const end = arr.length - 1;
    const peak = Peak(arr,start,end);
    const arr1 = BSA(arr, start , peak , target);
    const arr2 = BSD(arr  ,peak+1 ,end, target );
    console.log(`The index of targeted element is ${arr1 !== -1 ? arr1 : arr2} and the element is ${arr[arr1 !== -1 ? arr1 : arr2]}`);
}
main();
