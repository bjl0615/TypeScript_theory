/*
    파셜(Partial) 타입은 특정 타입의 부분 집합을 만족하는 타입을 정의할 수 있다.
*/

interface Address {
    email : string;
    address : string;
}

type MayHaveEmail = Partial<Address>;
const me : MayHaveEmail = {}; // 가능
const you : MayHaveEmail = { email : 'test@abc.com'}; // 가능
const all : MayHaveEmail = { email : 'capt@hero.com', address : 'Pangyo'}; // 가능