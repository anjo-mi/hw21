// 1----------------------------------------------------------------
// sum range of nums, forwards or backwards counting and by step


// function range(start,end,step){
//   let nums = []
//   if (end > start){
//     for (let i = start; i <= end; (i += step || 1)){
//       nums.push(i)
//       }
//   }else if(start > end){
//     for(let i = start ; i >= end ; (i += step || -1)){
//         nums.push(i)
//     }
//   }
//   return nums
// }
// function sum(arr){
//   return arr.reduce((a,el) => a + el, 0)
// }
// console.log(range(1, 10));
// console.log(range(5, 2, -1));
// console.log(sum(range(1, 10)));




// 2-----------------------------------------------------------------
// reverse array w/ copy, then reverse actual array



// let myArray = ["A", "B", "C"];

// function reverseArray(arr){
//     let reversed = []
//     for (let i = arr.length ; i >=0 ; i--){
//         reversed.push(arr[i])
//     }
//     return reversed
// }


// function reverseArrayInPlace(arr){
//     if (arr.length % 2 === 0){
//         for (let i = 0, j = arr.length - 1 ; i < arr.length / 2 ; i++, j--){
//             let front = arr[i]
//             let back = arr[j]
//             arr[i] = back
//             arr[j] = front
//         }
//     }else if (arr.length % 2 === 1){
//         for (let i = 0, j = arr.length - 1 ; i < Math.floor(arr.length / 2) ; i++, j--){
//             let front = arr[i]
//             let back = arr[j]
//             arr[i] = back
//             arr[j] = front
//         }
//     }
//     return arr
// }
// console.log(reverseArray(myArray));
// console.log(myArray);
// let arrayValue = [1, 2, 3, 4, 5];
// console.log(reverseArrayInPlace(arrayValue))
// console.log(arrayValue);










// 3----------------------------------------------------------------
// array to obj 'list' and back

function arrayToList(arr){
    let obj = null
    for (let i = arr.length - 1 ; i >= 0 ; i--){
        obj = {
            value: arr[i],
            rest: obj
        }
        
    }
    return obj
}

function listToArray(obj){
    let arr = []
    while(obj){
        arr.push(obj.value)
        obj = obj.rest
    }
    return arr
}

function prepend(el, obj){
    return {value: el, rest: obj}
}

function nth(obj, n){
    if (n === 0) return obj ? obj.value : undefined
    if (obj === null) return undefined
    return nth(obj.rest, n-1)



    
    // non recursive---------------------------------------
    
    // for (let i = 0 ; i < n ; i++){
    //     if (obj === null) return undefined
    //     obj = obj.rest
    // }
    // return obj ? obj.value : undefined
}
console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
