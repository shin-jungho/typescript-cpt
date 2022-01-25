function Person(name, age) {
  this.name = name;
  this.age = age;
}
var capt = new Person('캡틴', 100);

class Person { // 인스턴스 만들어주는 역할
  // 클래스 로직
  constructor(name, age) {
    console.log('생성되었습니다.');
    this.name = name;
    this.age = age;
  }
}

var seho = new Person('세호', 30); // 생성되었습니다.
console.log(seho);
