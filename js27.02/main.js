// let nums = [
//     [2, 1, 4,6],
//     [4, 2, 6,7], 
//     ["jdbh", "ajshvj"]
// ]

// for(let i = 0; i< nums.length; i++){
//     for(let k = 0; k<nums[i].length; k++){
//         console.log(nums[i][k]);
//     }
// }


// let students = ["Aytac", "Ulvi", "Naile", "Xalide", "Aynur"]

// for(let i=0; i<students.length; i++){
//     for(let k=0; k<students[i].length; k++){
//         if(students[i][k].toLowerCase() == "a"){
//             console.log(students[i]);
//             break;
//         }
//     }
// }

// let a = 5

// let b = a;

// b = 7;

// console.log("a", a)

// console.log("b", b);


// let arr1 = [3, 2, 1]

// let arr2 = []

// for(let i = 0; i<arr1.length; i++){
//     arr2[i]= arr1[i];
// }

// let arr3 = [3, 2, 1]

// arr2[0] = 4

// console.log("arr1", arr1);
// console.log("arr2", arr2);
// console.log("arr3", arr3);



// let student = {
//     name: "Memmed", 
//     age: 20,
//     isMarried: false,
//     lesson: {
//         name: "Programming",
//         teacher: "Resul"
//     },
//     grades: [100, 90, 34, 90]
// }

// student.group = "BP207"

// let val = prompt("Enter what u want to see")

// console.log(student[val]);


// for(elem in student){
//     console.log(elem+": "+student[elem]);
// }

// console.log(student.grades);



let user = {
    userName: "nargiz",
    password: "123asd"
}

let user2 = {}

for(key in user){
    user2[key] = user[key];
}


user2.password = "456"

console.log("user1", user);
console.log("user2", user2);
