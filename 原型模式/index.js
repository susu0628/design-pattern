/**
 * 原型模式：借助prototype来实现对象的创建和原型的继承
 * 在原型模式下，我们想要创建一个对象时，会先找到一个对象作为原型，然后通过克隆原型的方式来创建一个与原型一样（共享一套数据/方法）的对象。
 * Object.create 方法就是原型模式的天然实现，可用于创建对象
 * ES6中的类其实就是原型继承的语法糖
 */

// 模拟Object.create的实现 start
const obj = {
  name: 'jiang',
  sayHi: function () {
    console.log(`我是${this.name}`)
  }
}

obj.sayHi()

const obj2 = Object.create(obj);
obj2.sayHi();

// Object.create 的实现，借助prototype来实现对象的创建和原型的继承
function myCreate (obj) {
  const Fn = function () {};
  Fn.prototype = obj;
  return new Fn();
}

const obj3 = myCreate(obj);
obj3.sayHi();

// 模拟Object.create的实现 end


// ES6中的类
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`我是${this.name}`)
  }
}

const user1 = new User('jiang11');
user1.sayHi(); 

// 等价于以下的构造函数
function User1 (name) {
  this.name = name;
}

User1.prototype.sayHi = function() {
  console.log(`我是${this.name}`)
}

const user2 = new User('jiang22');
user2.sayHi(); 


// js中的·深拷贝
function deepCopy (obj) {

  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  const copyObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copyObj[key] = typeof obj[key] !== 'object' ? obj[key] : deepCopy(obj[key])
    }
  }

  return copyObj
}

const liLei = {
  name: 'lilei',
  habits: ['coding', 'hiking', 'running']
}

const liLeiCopy = deepCopy(liLei);
liLeiCopy.habits.splice(0, 1) 
console.log('liLeiCopy', liLeiCopy);
console.log('liLei', liLei);