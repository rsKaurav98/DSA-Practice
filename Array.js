
const selectedNum = (arr,start ,end,n )=>{
   
    while(start <= end){

        let mid = Math.floor((start + end)/2);
        let next = (mid + 1)%n;
        let prev = (mid + n -1)%n;

        if(arr[mid]<= arr[prev] && arr[mid] <= arr[next]){
            return {mid,prev} ;
        }
        
        else if(arr[mid] <= arr[start]){
            end = mid -1;
        }if(arr[mid]>= arr[end]){
              start = mid + 1;
        }
    }
    return -1;
}

const BS = (arr , start , end , target)=>{

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
const main =()=>{
const arr = [21,23,36,4,6,15,16,18];
const n = arr.length;
const  start = 0;
const  end = n-1;
const target = 6;
const res =selectedNum(arr,start,end,n);
const Number1 = BS(arr,0,res.prev,target);
const Number2 = BS(arr,res.mid,n-1,target)
console.log(`Index of selected number is ${Number1 !== -1 ?Number1 : Number2 }`)
}
main();