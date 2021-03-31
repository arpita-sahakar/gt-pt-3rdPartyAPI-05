// Write code to return the largest number in the given array

// var maxNum = function(arr) {};

const maxNum = (arr)=>{
    let largestNum = arr[0];
    for (i=0; i<arr.length; i++){
        if(arr[i]>largestNum){
            largestNum= arr[i]
        }
    }
    console.log(largestNum);
};

maxNum([5,10,2,15,17])