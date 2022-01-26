// 인터페이스 -> 존재하고있는 속성과 타입에 대한 정의들의대해 비교하는것 
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

class Person {
  name: string;
}
let developer: Developer;
let person: Person;

// developer = new Person();
// person = developer;

// 함수
let add = function (a: number) {

}

let sum = function (a: number, b: number) {

}
// add = sum;
sum = add;

// 제네릭
interface Empty<T> {

}
let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface notEmpty<T> {
  data: T;
}

let notempty1: notEmpty<string>;
let notempty2: notEmpty<number>;

notempty1 = notempty2;
notempty2 = notempty1;
