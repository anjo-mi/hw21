function camelize(str){
    str = str.split('-')
    if(str[0] === ''){
        str.shift()
    }
    let retVal = ''
    for (let i = 0 ; i < str.length ; i++){
        if (i === 0){
            retVal += str[i]
        }else{
            retVal += str[i].slice(0,1).toUpperCase() + str[i].slice(1)
        }
    }
    return retVal
}
console.log(camelize("background-color"))
console.log(camelize("list-style-image"))
console.log(camelize("-webkit-transition"))