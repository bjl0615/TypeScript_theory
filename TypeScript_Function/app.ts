/*
    함수의 타입 명시
        - 함수의 반환 (Return) 타입
        - 함수의 매개변수 (Parameter)

        함수의 반환(Return) 타입 명시하기
            function 함수이름 (매개변수1 , 매갸변수 2): 함수의 반환 타입 {

            }
    
    선택적 매개변수(Optional Parameter)
        보통 매개변수들은 값을 다 전해 주어야 하는데 매개변수 뒤에서 ?를 붙히면 선택적 매개변수가 된다.
        여기서 주의해야 할 점이 있는데 전달되는 매개변수가 여러개이고 몇가지만 선택적 매개변수인 경우
        선택적 매개변수들은 필수 매개변수 뒤에 위치!
        function 함수이름 (param1:string, param2?:number, param3:string, param4:string){

        }가 되면 뒤에 파라미터들도 선택적 매개변수로 바뀌어야 한다.
    
    화살표 함수(Arrow Function)
        기존 함수 
            fucntion add (num1, num2) {
                return num1 + num2;
            }
        화살표 함수
            const add = (num1, num2) => num1 + num2;
*/
const sendGreeting = (message = 'Hello', userName = 'there') : 
void => console.log(`${message}, ${userName}`);

sendGreeting();
sendGreeting('Good morning');
sendGreeting('Good afternoon' , 'Jenny');