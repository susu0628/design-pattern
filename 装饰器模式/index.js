/**
 * 装饰器模式：不改变原对象的基础上，对其进行包装拓展，使原对象可以满足用户更复杂的需求
 * 迭代需求1：每次点击按钮，提示快去登录
 */  
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

const changeButtonStatus = function (btnInstance) {
  btnInstance.innerText = '快去登录~'
  btnInstance.setAttribute("disabled", true)
}

document.getElementById("open").addEventListener('click', function() {
  let modal = new Modal();
  modal.style.display = 'block'

  // 迭代需求
  changeButtonStatus(document.getElementById("open"))
})

document.getElementById("close").addEventListener('click', function() {
  let modal = new Modal();
  modal.style.display = 'none';

  // 迭代需求
  changeButtonStatus(document.getElementById("close"))
})