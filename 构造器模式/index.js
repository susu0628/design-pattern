const Coder = function (name, age) {
  this.name = name;
  this.age = age;
  this.work = ['coder', 'fix bugs'];

  this.sayHi = function () {
    console.log(`${this.name}-${this.age}-${this.work.join('、')}`)
  }
}

const coder = new Coder('jiang', 22);
coder.sayHi();


const Pm = function (name, age) {
  this.name = name;
  this.age = age;
  this.work = ['prd', 'meeting'];

  this.sayHi = function () {
    console.log(`${this.name}-${this.age}-${this.work.join('、')}`)
  }
}

const pm = new Pm('tan', 21);
pm.sayHi();