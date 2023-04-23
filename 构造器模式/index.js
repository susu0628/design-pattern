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
/**
 * 构造器模式：使用构造函数去初始化对象，本质上是抽象了对象实例的变与不变
 *   变化的部分：名字 和 年龄各不相同
 *   不变的部分：都拥有名字和年龄属性以及sayHi方法
 */


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

/**
 * Coder 和 Pm构造函数高度相似，只是两者的work不一样
 * 可以利用工厂函数进行抽象：本质上是抽象了多个类的问题
 */