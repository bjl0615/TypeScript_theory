/*
    Omit
        오밋(Omit)타입은 특정 타입에서 지정된 속성만 제가힌 타입을 정의해 준다.
*/
interface AddressBook {
    name : string;
    phone: number;
    address : string;
    company : string; 
}

const phoneBook : Omit<AddressBook, 'address'> = {
    name : '재택근무',
    phone : 12342223333,
    company : '네 빙'
}

const chingtao:  Omit<AddressBook, 'address' | 'company'> = {
    name : '중국집',
    phone : 44455557777
}