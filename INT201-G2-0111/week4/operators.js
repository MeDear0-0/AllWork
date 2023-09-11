//-- ?: if-else with expression
// who = someone ? 'member' : 'guest' // มีแอคชั่นมากกว่า 1 จะใช้อันนี้ไม่ได้
// console.log(who) // guest

//-- optional chaining (?.)
// let str = 'Guest'
// console.log(str?.toLowerCase())

// let nums
// console.log(nums?.[0])

// let obj
// console.log(obj?.id)

//-- nullish coalescing (??)
// [] represents an empty array
// {} represents an empty object 
let nums = [1, 2, 3]
let arr
arr = nums ?? []
console.log(nums)
console.log(arr)