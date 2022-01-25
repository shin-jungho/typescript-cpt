// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10); // 숫자 10
// logText('하이'); // 문자열 하이 
// logText(true); // 진위값 true

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }
// logText<string>('Hi');
// logText<number>(10);

function logText<T>(text: T): T {
  console.log(text);
  return text;
}
const str = logText<string>('abc');
str.split('')
const login = logText<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법
// interface dropDown {
//   value: string;
//   selected: boolean;
// }
// const obj: dropDown = { value: 10, selected: false };

interface dropDown<T> {
  value: T;
  selected: boolean;
}

const obj: dropDown<string> = { value: 'abc', selected: false };

// 제네릭의 타입제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   text.forEach(function (text) {
//     console.log(text);
//   })
//   return text;
// }
// logTextLength<string>(['hi', 'abc']);

//제네릭 타입 제한 2 - 정의된 타입 이용하기
interface lengthType {
  length: number;
}
function logTextLength<T extends lengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength('a');

//제네릭 타입 제한 3 - keyof 키 값들만 들어갈 수 있음
interface shoppingItem {
  name: string;
  price: number;
  stock: number;
}
function getShoppingItemOption<T extends keyof shoppingItem>(itemOption: T): T {
  return itemOption;
}
getShoppingItemOption('name');