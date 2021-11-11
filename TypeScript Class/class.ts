/*
    객체지향 프로그램이란?
        연관된 변수와 함수들을 한 덩어리로 묶어서 구조화하여 표현하는 프로그래밍 스타일

        어플리케이션을 실제 세상에 존재하는 객체와 겉은 단위로 쪼개고 객체들이 서로 상호 작용함으로써 시스템이 동작!

    Class
        객체들은 클라스를 통해서 만들어 질 수 있고
        클라스는 객체의 뼈대, 설계도 , 생산틀이라고 할 수 있다.
        클라스 속에서 정의된 함수들은 클라스 내 정의된 변수들에게 접근 가능
        클라스 속에서 정의된 함수들은 상대적으로 적은 매개변수를 가짐

    Object
        OOP클라스는 개게를 만들어 내기 위한 설계도, 생산틀
 */

class Employee {
    fullName!: string;
    age!: number;
    jobTitle!: string;
    hourlyRate!: number;
    workingHoursPerWeek!: number;
    
    printEmployeeDetails = () : void => {
        console.log(`${this.fullName}의 직업은 ${this.jobTitle} 이고 일주일의 수입은 ${this.hourlyRate*this.workingHoursPerWeek} 달러 이다.`)
    }
}

let employee1 = new Employee, {};
employee1.fullName = '인수';
employee1.age =28;
employee1.jobTitle= '주니어 개발자';
employee1.hourlyRate = 40;
employee1.workingHoursPerWeek = 35;
employee1.printEmployeeDetails,{};