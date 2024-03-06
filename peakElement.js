const Peak = (arr) => {
    let start = 0;
    let end = arr.length - 1;

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

const arr = [12, 15, 10, 23, 33, 36];
const res = Peak(arr);
console.log(`The element is ${arr[res]} and the index is ${res}`);
