let student = {
    name : 'Jake',
    course : 'Getting Started with TypeScript',
    codingIQ: 80,
    code : function() {
        console.log('brain is working hard');
    }
}

function calculateCodingIQ (lostPoints) {
    return 100 - lostPoints;
}

// app.ts:2:1 - error TS2322: Type 'string' is not assignable to type 'number'. 라는 오류가 뜨는데
// 재할당 하려는 변수 값이 숫자가 아니기 때문에 변수에 할당 될 수 없다라는 뜻이다.
// 만약 a = 10으로 바꾸면 에러 메시지가 사라진다.
// 쉽게 말해서 처음에 지정한 값이 그 변수의 타입이 된다 변수 a 타입은 = 숫지(Number)
// 즉 타입스크립트에서는 타입 표기가 없는 경우 나의 코드를 일고 분석하여 타입을 유추해낼 수 있다.
// 이런 것 들을 바로 (Type Inference)타입 추론이라고 한다.