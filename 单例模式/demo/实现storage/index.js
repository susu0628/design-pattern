/**
 * 题目：实现Storage，使得该对象为单例，基于 localStorage 进行封装。实现方法 setItem(key,value) 和 getItem(key)。
 */
class Storage {
  static createInstance = function () {
    if (!Storage.instance) {
      Storage.instance = new Storage();
    }
    return Storage.instance
  }

  setItem(key, value) {
    localStorage.setItem(key, value);
    // this[key] = value
  }

  getItem(key) {
    return localStorage.getItem(key)
    // return this[key]
  }
}

const a = Storage.createInstance();
a.setItem('name', 'jiang');
console.log(a.getItem('name'));

const b = Storage.createInstance();
console.log(b.getItem('name'));

console.log(a === b);