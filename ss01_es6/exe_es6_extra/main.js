// Bài 1: Sử dụng ES6 ( arrow function, fitter)							
// 	1. Viết hàm kiểm tra 1 số có phải là số nguyên tố						
// 	2. Cho 1 mảng số nguyên. Sử dụng filter để lọc ra các số là số nguyên tố						
let checkPrime = n => {
    if (n < 2){
        return false;
    } else {
        for (let index = 2; index < n; index++) {
                if (n % index == 0){
                    return false;
                }
        }
        return true;
    }
}

let arrInt = [1,5,2,6,9,87,56,21,32,79,89];

let arrPrime = arrInt.filter (item => checkPrime(item));
console.log(arrPrime);

// Bài 2: Sử dụng  Destructuring, rest, spread	
// Hãy tạo ra 1 đối tượng student gồm các thuộc tính và giá trị lấy từ đối tượng person và hiển thị ra thông tin của student vừa tạo												

const person = {
    firstName: 'John',
    lastName : 'Doe',
    age: 30,
    gender:'male',
    occutpation:'developer',
    nationality:'American',
    city:'New York',
    hobbies: ['reading','traveling','photography'],
    languages : ['English', 'Spanish'],
    education:{
        degree:'Bachelor',
        major:'Computer Science',
        university:'Havard University'
    }
};
let {firstName,gender,education,languages} = person;
const student = {
    firstName: firstName,
    gender:gender,
    degree:education.degree,
    english:languages[0]
}
console.log(student);

// Bài 3: Viết một function có tham số là một đối tượng bất kỳ. 
//         Function sẽ hiển thi ra 2 thuộc tính firstName và degree
//          Nếu đối tượng truyền vào không có thuộc tính firstName 
//          thì firstName có giá trị mặc định là ""Quân"", tương tự với degree là "NA"											

const getInfoStudent = ({firstName="Quân",degree="N/A"}) =>{
    return "First name: " + firstName + "\n" + "Degree: " + degree;
}
const student1 = {
    age: 30
}
console.log(getInfoStudent(student));