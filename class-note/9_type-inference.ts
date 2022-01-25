// 타입 추론 기본 1
let a = 'abc';

function getB(b = 10) {
  var c = 'hi';
  return b + c;
}

// 타입 추론 기본 2
// interface dropDown<T> {
//   value: T;
//   title: string;
// }

// var shoppingItem: dropDown<string> = {
//   value: 'abc',
//   title: 'hello'
// }

// 타입 추론 기본 3
interface dropDown<T> {
  value: T;
  title: string;
}

interface detailDropDown<K> extends dropDown<K>{
  description: string;
  tag: K;
}

let detailedItem: detailDropDown<string> = {
  title: 'abc',
  description: 'ab',
  value: 'a',
  tag: 'a',
}