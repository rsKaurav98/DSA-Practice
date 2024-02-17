 const Floor = (arr,target)=>{
  let start = 0;
  let end = arr.length - 1 ;
  let floor = arr[end];
  while (start <= end ){
    let mid = Math.floor((start + end )/2);

    if(arr[mid]=== target){
        return arr[mid];
    }
    else if(arr[mid]<= target){
        start = mid +1;
        floor = arr[mid];     
    }
    else {
        end = mid -1;
    }
  }return floor;
 }


 const arr = [1,12,13,15,17,18,20,23];
 const target = 100;
 const res = Floor(arr, target);
 console.log(`The floor of your desired number is ${res} `);

