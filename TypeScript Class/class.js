"use strict";
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
    
    Constructior(생성자)
        모든 class는 Consutructor(생성자)를 가짐
        Constructor(생성자) 는
        클라스로 부터 객체를 생성할 때,
        호출되며 "객체의 초기화를 담당"

    Access Modifiers(접근 제한자)
        클라스 속 멤버 변수 (프로퍼티)와
        메소드에 적용될 수 있는 키웓,
        클라스 외부로 부터의 접근을 통제
            public , private
        public 멤버를 노출시키기 위해서
        Public 키워드를 명시할 필요 없음

    Getter & Setter
        클래스 내에서 멤버변수를 나타내는 fullName앞에서 _(undeerscore)를 넣어준다.

*/
var Employee = /** @class */ (function () {
    function Employee(_fullName, _age, _jobTitle, _hourlyRate, workingHoursPerWeek) {
        var _this = this;
        this._fullName = _fullName;
        this._age = _age;
        this._jobTitle = _jobTitle;
        this._hourlyRate = _hourlyRate;
        this.workingHoursPerWeek = workingHoursPerWeek;
        this.printEmployeeDetails = function () {
            console.log(_this._fullName + "\uC758 \uC9C1\uC5C5\uC740 " + _this._jobTitle + " \uC774\uACE0 \n        \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740 " + _this._hourlyRate * _this.workingHoursPerWeek + " \uB2EC\uB7EC \n        \uC774\uB2E4.");
        };
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        /*
            객체가 생성될 때, 컨스트럭터이 매개변수로 전달된 값은,
            객체의 프로퍼티 값으로 자동으로 그 값이 초기화 되고 할당됨.
        */
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee1 = new Employee('민수', 28, '주니어 개발자', 40, 35);
employee1.fullName = '핸리';
employee1.printEmployeeDetails();
var employee2 = new Employee('미나', 32, '프로젝트 매니저', 55, 30);
