const User = function (name, career, work) {
  this.name = name;
  this.career = career;
  this.work = work;
}

User.prototype.sayHi = function () {
  console.log(`${this.name}是一个${this.career},他的工作是${this.work.join('、')}`)
}
const Factory = function (name, career) {
  let work;

  switch (career) {
    case 'coder':
      work = ['coder', 'fix bugs'];
      break;
    case 'pm':
      work = ['prd', 'meeting'];
      break;
    default:
      work = ['work']
  }

  return new User(name, career, work)
}

const coder = new Factory('jiang', 'coder');
coder.sayHi();
const pm = new Factory('tan', 'pm');
pm.sayHi();

/**
 * 工厂模式：将创建对象的过程单独封装，可以解决创建多个不同类的问题
 */