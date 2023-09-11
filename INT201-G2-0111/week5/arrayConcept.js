// array can contain different data types in one array
const x = [1, true, 'A']
console.log(x)
console.log(x.length) // lenghtis size of array
console.log(x[0]) // get the first element of array

// array size can grow dynamically
x[1] = false
x[x.length] = 555 // append a new element
x.push(888)
console.log(x)


// x[expression to find index number]
console.log(x.length - 1) // get the last element of array

const y = [] // y is empty array
let z

console.log(y)
console.log(z)

if(y.length === 0) console.log('y is an empty array') // ไว้เช็ค empty array
else console.log('y is not an empty array') // ไว้เช็ค empty array

if(z?.length === 0) console.log('z is an empty array') // ไว้เช็ค empty array
else console.log('z is not an empty array')
