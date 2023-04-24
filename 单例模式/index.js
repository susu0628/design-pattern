function User () {
}

User.prototype.sayHi = function (name) {
  console.log(`hi, ${name}`)
}

// 方法一：静态属性
User.createInstance1 = function () {
  if (!User.instance) {
    User.instance = new User()
  }
  return User.instance
}

// 方法二：闭包
User.createInstance2 = (function () {
  let instance;

  return () => {
    if (!instance) {
      instance = new User()
    }
    return instance
  }
})()

const user1 = User.createInstance2();
user1.sayHi('jiang');

const user2 = User.createInstance2();
user2.sayHi('tan');

console.log(user1 === user2);

/**
 * 单例模式
 * 保证一个类仅有一个实例（instance），并提供一个访问它的全局访问点（createInstance1、createInstance2）
 */
