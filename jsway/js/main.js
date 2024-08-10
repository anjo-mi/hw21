// function camelize(str){
//     str = str.split('-')
//     if(str[0] === ''){
//         str.shift()
//     }
//     let retVal = ''
//     for (let i = 0 ; i < str.length ; i++){
//         if (i === 0){
//             retVal += str[i]
//         }else{
//             retVal += str[i].slice(0,1).toUpperCase() + str[i].slice(1)
//         }
//     }
//     return retVal
// }
// console.log(camelize("background-color"))
// console.log(camelize("list-style-image"))
// console.log(camelize("-webkit-transition"))



// function filterRange(arr, a, b){
//     let filtered = arr.filter(el => el >= a && el <= b)
//     return filtered
// }
// let arr = [5, 3, 8, 1]
// let filtered = filterRange(arr, 1, 4)
// console.log(filtered, arr)


// function decreasingOrder(arr){
//     return arr.sort((a,b) => b-a)
// }
// let arr = [5, 2, 1, -10, 8]
// console.log(decreasingOrder(arr), arr)

function copySorted(arr){
    let copy = []
    for (let i = 0 ; i < arr.length ; i++){
        copy.push(arr[i])
    }
    return copy.sort()
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log(arr, sorted)