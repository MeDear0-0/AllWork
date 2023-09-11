//  Single datatype Array
const fruit = ["Apple", "Papaya", "Banana", "Orange"]



//  Multiple datatype Array
const mixedData = [1, "Goodito Fujiko", { age: 45, sex: "male" }]

// Datatype of mixedData[0] = 
// Datatype of mixedData[1] = 
// Datatype of mixedData[2] = 



const students = [
    {
        id: 1,
        name: "Goodito Fujiko",
        age: 20
    },
    {
        id: 5,
        name: "Dimitri Petrenko",
        age: 22
    },
    {
        id: 10,
        name: "Rico Rodriguez",
        age: 21
    },
    {
        id: 3,
        name: "Lena Oxton",
        age: 28
    },
    {
        id: 2,
        name: "Mary Somers",
        age: 39
    }
]



//  Array.filter()
const filteredStudents = students.filter(
    (value) => {
        return value.age < 25
    }
)

// console.log(filteredStudents)

//  Array.sort()
const numbers = [1,4,5,2,3,0]
// console.log(numbers)
numbers.sort(
    (a,b) => {
        return a - b 
    }
)

// console.log(numbers)




//  Array.splice
const food = ["Omlete", "Tom Yam Shrimp", "Kra Phow Crispy Pork", "Ramen"]

// Array.splice(<ตำแหน่ง index เริ่มต้น>,<จำนวน index ที่จะลบ>,<Element ที่จะใส่เข้าไป>)
//  ต้องการที่จะใส่ "Pad Tai" เข้าไปใน Array

// food.splice(2,0,'Pad Tai')
// console.log(food)



//  ถ้าอยากลบ Ramen โดยใช้ indexOf ล่ะ?

// let selectedIndex = students.indexOf('Ramen')
// console.log(selectedIndex)
// food.splice(selectedIndex,1,'Pad Tai')
// console.log(food)

//  กรอง students ที่มีอายุน้อยกว่า 25 ปี
const selectedStudent = students.filter(
    (value) => {
       return value.age < 25
    }
)
console.log(selectedStudent)





//  เรียงข้อมูลใน students ตาม id
students.sort (
    (student1,student2) => {
        return student1.id - student2.id
    }
)
console.log(students)








