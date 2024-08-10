// 1------------------------------------------------------------

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



// 2------------------------------------------------------------------

// function filterRange(arr, a, b){
//     let filtered = arr.filter(el => el >= a && el <= b)
//     return filtered
// }
// let arr = [5, 3, 8, 1]
// let filtered = filterRange(arr, 1, 4)
// console.log(filtered, arr)



// 3------------------------------------------------------------------

// function decreasingOrder(arr){
//     return arr.sort((a,b) => b-a)
// }
// let arr = [5, 2, 1, -10, 8]
// console.log(decreasingOrder(arr), arr)




// 4----------------------------------------------------------------

// function copySorted(arr){
//     let copy = []
//     for (let i = 0 ; i < arr.length ; i++){
//         copy.push(arr[i])
//     }
//     return copy.sort()
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// console.log(arr, sorted)



// 5--------------------------------------------------------------

// function Calc(){
//     this.operation = {
//         '+' : (a,b) => a + b,
//         '-' : (a,b) => a - b,
//         '*' : (a,b) => a * b,
//         '/' : (a,b) => a / b
//     }

//     this.getVal = (str) =>{
//         str = str.split(' ')

//         a = +str[0]
//         op = str[1]
//         b = +str[2]

//         if (!this.operation[op] || isNaN(a) || isNaN(b)){
//             return 'invalid entry'
//         }else{
//             return this.operation[op](a,b)
//         }
//     }
//     this.addOps = function(name, func){
//         return this.operation[name] = (func)
//     }
// }
// const power = new Calc()
// power.addOps('**', (a,b) => a**b)
// console.log(power.getVal('2 ** 3'))






// 6------------------------------------------------------------------


// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(el => el.name)

// console.log( names )






// 7--------------------------------------------------------------------


let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(el =>({
    fullName: `${el.name} ${el.surname}`,
    id: el.id
}))
console.log( usersMapped[0].id )
console.log( usersMapped[0].fullName )