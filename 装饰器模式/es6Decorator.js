/**
 * 装饰器模式：不改变原对象的基础上，对其进行包装拓展，使原对象可以满足用户更复杂的需求
 * 迭代需求1：每次点击按钮，提示快去登录。用ES6中class的方式实现
 */

class OpenButton {
  onClick() {
    let modal = new Modal();
    modal.style.display = 'block'
  }
}

class CloseButton {
  onClick() {
    let modal = new Modal();
    modal.style.display = 'none'
  }
}
class Decorator {
  constructor(button, btnInstance) {
    this.button = button;
    this.btnInstance = btnInstance;
  }

  onClick = function () {
    this.button.onClick();
    this.changeButtonStatus();
  }

  changeButtonStatus = function () {
    this.btnInstance.innerText = '快去登录~'
    this.btnInstance.setAttribute("disabled", true)
  }
}
const Modal = (function () {
  let modal;
  return function() {
    if (!modal) {
      modal = document.createElement('div');
      modal.innerText = '这是全局唯一的modal';
      modal.style.display = 'none';
      document.body.appendChild(modal);
    }

    return modal;
  }
  
})()


document.getElementById("open").addEventListener('click', function() {
  const openButton = new OpenButton();
  const decorator = new Decorator(openButton, document.getElementById("open"));
  decorator.onClick();
})

document.getElementById("close").addEventListener('click', function() {
  const closeButton = new CloseButton();
  const decorator = new Decorator(closeButton, document.getElementById("close"));
  decorator.onClick();
})