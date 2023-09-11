// // x is a global Scope
// let x = 1
// console.log(x)
// {
//     // x is a block Scope
//     let x = 5
//     console.log(x)
//     var y = 111
// }
// console.log(y) // var has no block scope, so y is a global scope
// x = 10
// console.log(x)

// function doIt() {
//     if (1) {
//         // block Scope
//         let x = 555
//         console.log(x)
//     } else console.log(`not 1`)
//     console.log(`x: ${x}`) // globale scope of line#2
// }

// function doSomething() {
//     let x = 'A' // function scope
//     console.log(x) // 'A'
// }
// doSomething()
// console.log(x) // globale scope of line#2

//x is a global scope
let x = 1
console.log(x)
{ 
    //x is a block scope 
    let x = 5  
    console.log(x)  
    var y = 111
}
console.log(y) //var has no block scope, so y is a global scope
x = 10
console.log(x)
function doIt() {
   if (1) {    //?block scope    
    let x = 555    
    console.log(x)  
    } else console.log(`not 1`)  
    console.log(`x: ${x}`)
}
doIt()
console.log(x) //? global scope x of line#2
function doSomething() { 
    let x = 'A' //function scope 
    console.log(x) //? 'A'
}
doSomething()
console.log(x) //?  global scope x of line#2

let m = 1
// explicit type conversion
console.log(typeof m)
// number --> String
console.log(typeof String(m))
// number --> boolean
console.log(typeof Boolean(m))

//if need boolean but 1 is number, so implicit conversion is called automatically
if (1) console.log('implicit conversion is working')

// --------------------------------------

let nums  = [1, 2, 3, 4, 5]
console.log(nums[0]) // reading nums array at index:0
let values = null

// optional chaining protects null and undefined value of variables to keep program running 
console.log(values?.[0])

let obj = {id: 1, title: 'JS'}
console.log(obj.id)

let obj2
console.log(obj2?.id)