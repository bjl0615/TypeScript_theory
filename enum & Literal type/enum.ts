
/*
    열거형 Enum
        Enum이란, 연관된 아이템들을 함께 묶어서 표현 할 수 있는 수단

        Male = 0,
        Female = 1,
        genderNeutral = 2
        를 가지는데 이것이 바로 숫자 열거형(Numerice Enum)이라고 한다.

        숫자 대신 문자열거형 으로 할려면 뒤에 string 값을 붙여 주면 된다.
        (
            Male = 'male',
            Female = 'female',
            genderNeutral = 'genderNeutral'
        )

    리터럴 타입
            인터페이스에 |(파이프 라인)을 넣고 분리만 해주면 된다.
*/
enum GenderType {
    Male = 'male',
    Female = 'female',
    genderNeutral = 'genderNeutral'
}

interface Student {
    readonly studentID : number,
    studentName : string,
    age?: number;
    gender : 'male' | 'female' | 'genderNeutral',
    subject : string,
    courseCompleted : boolean,
    // addComment (comment : string): string;
    addComment?: (comment: string) => string;
}

let student1 = {
    studentID : 121212,
    studentName : 'Janet Jackson',
    age : 30,
    gender : GenderType.Male,
    subject :'Mongo DB',
    courseCompleted : false,
}



// 인터페이스를 타입으로 가지는 값은 인터페이스의 구조를 그 값으로 가지도록 강제된다.
function getStudnetDetails(studentID : number) : Student {
    
    return {
        studentID : 12345,
        studentName : 'Mark Jacobs',
        gender : 'male',
        subject :'Node JS',
        courseCompleted : true,
    };
}

function saveStudentDetails (student : Student) : void {
    
}

saveStudentDetails(student1)
