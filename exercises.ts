//////////////////////////////////////////////////1-masala

// function getSum(n: number): number {
//     let sum1 = 1;
//     let sum2 = 1;

//     for (let i = 1; i <= 2 * n - 1; i += 2) {
//         sum1 *= i
//     }
//     for (let i = 2; i <= 2 * n; i += 2) {
//         sum2 *= i
//     }

//     return sum1 + sum2;
// }


// const result = getSum(3)

// console.log(result);

//////////////////////////////////////////////////2-masala

// let arr = [1589, 31851, 512, 180975, 78];
// function getHighestNumberOfDigits(arr: number[]): number {
//     let maxNumber = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > maxNumber) {
//             maxNumber = arr[i];
//         }
//     }
//     return maxNumber;
// }

// let res = getHighestNumberOfDigits(arr);
// console.log(res);

//////////////////////////////////////////////////3-masala

// function getStringArr(arr: any[]): string[] {
//     return arr.filter((item) => typeof item === "string") as string[];
// }

// const arr = [1, "Abdulaziz", "Elbek", false, [], "Jurabek", {}];
// const result = getStringArr(arr);
// console.log(result);

//////////////////////////////////////////////////4-masala

// function getPunctuationNumber(str: string): string {
//     let res = 0;
//     const punctuationSigns = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', "'"];
//     for (let i = 0; i < str.length; i++) {
//         if (punctuationSigns.includes(str[i])) {
//             res++;
//         }
//     }
//     let newstr = res.toString()
//     return newstr;
// }
// let str = "Hello! How are you? I'm doing great. What's new?";
// console.log(getPunctuationNumber(str));


//////////////////////////////////////////////////5-masala

// function switchLetters(str: string): string {
//     let newstr = ''
//     for (let i = 0; i < str.length; i++) {
//         if (newstr === str.toLowerCase()) {
//             newstr.toUpperCase()
//         } else {
//             newstr.toLowerCase()
//         }

//     }
//     return newstr;
// }

// let str = "Abdulaziz Programmer"
// console.log(switchLetters(str));


//////////////////////////////////////////////////6-masala

// function changeObjToArr(obj: object) {
//     let newobj = obj

// }

// let obj = { a: 1, b: 2, c: 3 }

// console.log(changeObjToArr(obj));

//////////////////////////////////////////////////7-masala

// function seperateStudents(students: any[]) {
//     const result = {
//         grant: [],
//         contract: [],
//     };

//     for (const student of students) {
//         if (student.isGrant) {
//             result.grant.push(student.name);
//         } else {
//             result.contract.push(student.name);
//         }
//     }

//     return result;
// }

// let students = [
//     { name: "Jurabek", isGrant: false },
//     { name: "Elbek", isGrant: true },
//     { name: "Shamshod", isGrant: false },
//     { name: "Kamola", isGrant: false },
//     { name: "Gulnoza", isGrant: true },
//     { name: "Savlatbek", isGrant: false },
// ];

// const separated = seperateStudents(students);
// console.log(separated);


//////////////////////////////////////////////////8-masala


// function getTotalPages(books: { name: string; pages: number; isReadFinished: boolean }[]) {
//     let totalPages = 0;

//     for (const book of books) {
//         if (book.isReadFinished) {
//             totalPages += book.pages;
//         }
//     }

//     return totalPages;
// }
// const books = [
//     { name: "The Great Gatsby", pages: 180, isReadFinished: true },
//     { name: "To Kill a Mockingbird", pages: 336, isReadFinished: false },
//     { name: "Atom habits", pages: 328, isReadFinished: true },
//     { name: "Pride and Prejudice", pages: 432, isReadFinished: false },
//     { name: "The Catcher in the Rye", pages: 224, isReadFinished: true },
//     { name: "The Hobbit", pages: 310, isReadFinished: false },
//     { name: "The Lord of the Rings", pages: 1178, isReadFinished: true },
//     { name: "Harry Potter", pages: 320, isReadFinished: true },
//     { name: "Fahrenheit 451", pages: 249, isReadFinished: false },
//     { name: "To the Lighthouse", pages: 209, isReadFinished: true },
// ];
// const totalPages = getTotalPages(books);
// console.log(totalPages);


//////////////////////////////////////////////////9-masala

// let obj = { a: 1, b: 2, c: 3, };

// Object.prototype.keys = function () {
//     return Object.keys(this);
// };
// console.log(obj.keys());


//////////////////////////////////////////////////10-masala

// class Student {
//     firstName: string;
//     lastName: string;
//     university: string;
//     course: number;
//     totalYears: number;
//     isGrant: boolean;

//     constructor(
//         firstName: string,
//         lastName: string,
//         university: string,
//         course: number,
//         totalYears: number,
//         isGrant: boolean
//     ) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.university = university;
//         this.course = course;
//         this.totalYears = totalYears;
//         this.isGrant = isGrant;
//     }

//     getInfo(): string {
//         const grantStatus = this.isGrant ? "grant asosida" : "o'qiydi";
//         const graduationYear = this.totalYears + 1;
//         const info = `${this.firstName} ${this.lastName} ${this.university} universitetida ${this.course}-kursda ${grantStatus} o'qiydi. 1 yildan keyin universitetdan qutuladi.`;
//         return info;
//     }
// }

// const student = new Student("Abdulaziz", "Programmer", "TATU", 3, 4, true);
// const result = student.getInfo();
// console.log(result);
