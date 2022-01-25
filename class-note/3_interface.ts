interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
let seho: User = {
  age: 33,
  name: '세호',
}

// 함수에 인터페이스 활용 
// User에 들어있는 프로퍼티 개수대로 넣어야 한다.
function getUser(user: User) {
  console.log(user);
}
const capt = {
  name: '캡틴',
  age: 100
}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface sumFunc {
  (a: number, b: number):number;
}

var sum: sumFunc;
sum = function(a: number, b:number): number{
  return a + b;
}

// 인덱싱
interface stringArray {
  [index: number]: string // 인덱스는 숫자지만 배열안에는 문자열이라는 뜻
}

let arr: stringArray = ['a', 'b', 'c'];
arr[0];

// 딕셔너리 패턴 * RegExp === 정규표현식 생성자
interface stringRegexDict {
  [key: string]: RegExp
}

let obj: stringRegexDict ={
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/
}
// obj['cssFile'] = 'a';

Object.keys(obj).forEach(function(value) {

}) 

// 인터페이스 확장

interface Person {
  name: string;
  age: number;
}

interface Developer extends Person { // extends로 확장 가능
  language: string;
}

let catptain: Developer = {
  language: 'js',
  age: 100,
  name: '캡틴',
}
