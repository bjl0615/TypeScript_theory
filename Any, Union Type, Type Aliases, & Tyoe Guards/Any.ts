/*
    Any 타입
        어떠한 타입이든 모두 가능!

        타입에 관한 더많은 정보를 명시할 수록 더 좋음!
        효과적인 코드의 유지 보수
        동적 컨텐츠를 가져와서 변수의 타입을 알 수가 없어서 지정을 못할 경우 any타입을 지정
    
    Union 타입
        제한된 타입을 동시에 지정하고 싶을때 쓴다.
        let someValue : number | string

    Type Aliasis 타입
        type 키워드를 사용해서 새로운 타입을 지정하는 것
        같은 조합이 계속 반복될 겨웅 어떻게 코드를 향상 시킬 수 있을까?
        같은 코드를 반복하는 것 보다는 코드를 타입으로 지정하고 재활용!
        이럴 때 바로 Type Aliasis를 쓴다.

    타입 가드
        값을 받아 할당할떄 Type Aliasis 타입을 사용하면 값이 햇갈릴 수도 있다 
        그럴때 쓰는 것이 바로 typeof Operator를 사용하면 된다.
        Typeof 연산자와 조건문을 사용하면 된다.
        Union 타입을 사용할 때 typeof Operator를 사용하여 코드 검증을 수행하는 것을 타입 가드라고 한다.
 */

    // Type Aliasis 타입
// type StrOrNum = number | string;
// let totalCost : number;
// let orderID : StrOrNum;

// const CalcuateTotalCost = (price: StrOrNum, qty: number) : void => {

// }
// const findOrderID = (customer: { costomerId : StrOrNum, name : string}, 
//     producation: StrOrNum): StrOrNum => {
//         return orderID;
//     }

    // Any 타입
// let someValue : any = 5;
// someValue = 'hello';
// someValue = true;


    // Union 타입
// let price : number | string = 5;
// price = 'free';
// price = true;

    // 타입 가드
type StringOrNum = string | number;
let itemPrice : number;

const setItemPrice = (price: StringOrNum ) : void => {
    if(typeof price === 'string') {
        itemPrice = 0;
    } else {
        itemPrice = price;
    }
};

setItemPrice(50);