// 2. Use spread

const x = [1, 9, 11]
const y = [3, 5, 7]

// using spread operator [...] to copy element of xand y 
const z = [...x, ...y] // [1, 9, 11, 3, 5, 7]
console.log(z)

const a = [1, ...y, 11]
console.log(a)
console.log(a[2]) //5
// console.log(a)/[1, 3, 5, 7, 11]

// const str = 'hello world'
// const collStr = [...str]
// console.log(collStr)


const str = [...'hello world']

// for(const entry of str.entries()) {

//     console.log(entry)

// }

for(const [value, int] of str.entries()) {

    console.log(value)

    console.log(int)

}