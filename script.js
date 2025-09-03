function fibonacci (n) {
    if (n === 0){
        return 0;
    };
    if( n===1){
        return 1;
    };
    return fibonacci(n - 1) + fibonacci(n - 2);

}
console.log(fibonacci(8));

function mergeSort(array){
    if(array.length <=1){
        return array;
    }
    const middle = Math.floor(array.length / 2);
    leftHalf = array.slice(0, middle);
    rightHalf = array.slice(middle);

    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    return merge(sortedLeft,sortedRight);
}
function merge(left, right){
    const result = [];

    while (left.length && right.length){
        if (left[0] < right[0]){
            result.push(left[0]);
            left.shift();
        }else {
            result.push(right[0]);
            right.shift();
        }
        
    }
    return result.concat(left,right);
}
console.log(mergeSort());