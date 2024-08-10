// 1------------------------------------------------------------
// camel case




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







// 2----------------------------------------------------------------
// filter range in array, don't change array




// function filterRange(arr, a, b){
//     let filtered = arr.filter(el => el >= a && el <= b)
//     return filtered
// }
// let arr = [5, 3, 8, 1]
// let filtered = filterRange(arr, 1, 4)
// console.log(filtered, arr)



// 3------------------------------------------------------------------
// sort array in decreasing order


// function decreasingOrder(arr){
//     return arr.sort((a,b) => b-a)
// }
// let arr = [5, 2, 1, -10, 8]
// console.log(decreasingOrder(arr), arr)




// 4----------------------------------------------------------------
// sort a copy of an array without changing initial order of array


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
// create a simple calculator



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
// map user array to array of their names

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(el => el.name)

// console.log( names )






// 7--------------------------------------------------------------------
// map to new array of objects, combining keys into new keys

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(el =>({
//     fullName: `${el.name} ${el.surname}`,
//     id: el.id
// }))
// console.log( usersMapped[0].id )
// console.log( usersMapped[0].fullName )






// 8--------------------------------------------------------------------
// sort array of objects by age

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// function sortByAge(arr){
//     arr.sort((a,b) => a.age - b.age)
// }

// sortByAge(arr);

// console.log(arr[0].name)
// console.log(arr[1].name)
// console.log(arr[2].name)






// 9------------------------------------------------------------------
// shuffle array

// function shuffle(arr){
//     let ind = arr.length

//     while(ind > 0){
//         let random = Math.floor(Math.random() * ind)
//         ind--

//         [arr[ind], arr[random]] = [arr[random], arr[ind]]
//     }
//     return arr
// }
// let arr = [1, 2, 3];
// console.log(shuffle(arr))
// console.log(shuffle(arr))
// console.log(shuffle(arr))






// 10---------------------------------------------------------------
// get average age of array of user objs


// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };
// let arr = [ john, pete, mary ];

// function getAverageAge(arr){
//     return arr.reduce((a,el) => a + el.age ,0) / arr.length
// }
// console.log( getAverageAge(arr) )






// 11---------------------------------------------------------------
// filter unique elements from an array


// function unique(arr) {
//     let singles = []
//     arr.forEach(el => {
//         if (!singles.includes(el)){
//             singles.push(el)
//         }
//     })
//     return singles
//   }
  
//   let strings = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ]
//   console.log( unique(strings) )




// 12----------------------------------------------------------------
// group by id


// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
// ]
  
// function groupById(arr){
//     let obj = {}
//     arr.forEach(el => {
//         obj[el.id] = el
//     })
//     return obj
// }
// let usersById = groupById(users)
// console.log(usersById)

