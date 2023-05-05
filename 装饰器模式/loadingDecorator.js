/**
 * 需求：模拟按钮的防重复点击，以及loading
 * 按照普通的写法，几个按钮就需要几个loading
 * 利用装饰器优化，省略变量的定义，优化已有逻辑
 */
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const countP = document.getElementById('count');

// loading 装饰器
function loadingDecorator (key) {
  return (target, name, descriptor) => {
    const originMethod = descriptor.value;
    descriptor.value = function() {
      if (target[key]) {
        return;
      }
      target[key] = true;
      return originMethod.apply(this, arguments).finally(() => {
        target[key] = false;
      })
    }
  }
}

class CountText {
  constructor(count) {
    this.count = count;
  }

  @loadingDecorator('loading1') // 调用
  add() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.count += 1;
        countP.innerText = this.count;
        resolve()
      }, 1000)
    })
  }

  @loadingDecorator('loading2') // 调用
  sub() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.count -= 1;
        countP.innerText = this.count;
        resolve();
      }, 1000)
    })
  }
}

const countOpt = new CountText(0);
addBtn.addEventListener('click', function() {
  countOpt.add()
})



subBtn.addEventListener('click', function() {
  countOpt.sub()
})