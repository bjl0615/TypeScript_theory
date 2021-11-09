/*
    타입 명시
        변수를 선언할 때, 변수 값이 타입을 명시함으로써
        변수 값의 데이터 타입을 지정!
    
    Syntax 
        let x : string = '나는 영원한 문자열';    
*/

let studentID : number = 12345;
let studentName : string = 'Jenny Kim';
let age : number = 21;
let gender : string = 'female';
let sbuject : string = 'JavaScript';
let courseCompleted : boolean = false;

function getStudentDatails(studentID : number): {
    studentID : number;
    studentName : string;
    age : number;
    gender : string;
    subject : string;
    createDate : Date;
} {
    return null;
}