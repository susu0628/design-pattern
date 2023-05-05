/**
 * 需求：模拟按钮的防重复点击，以及loading
 * 按照普通的写法，几个按钮就需要几个loading
 */
const addBtn = document.getElementById('add');
let loading1 = false;

class CountText {
  constructor(count) {
    this.count = count;
  }

  add() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.count += 1;
        const countP = document.getElementById('count');
        countP.innerText = this.count;
        resolve()
      }, 3000)
    })
  }

  sub() {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.count -= 1;
        const countP = document.getElementById('count');
        countP.innerText = this.count;
        resolve();
      }, 3000)
    })
  }
}

const countOpt = new CountText(0);
addBtn.addEventListener('click', function() {
  if (loading1) return;
  loading1 = true;
  countOpt.add().finally(() => {
    loading1 = false;
  });
})


const subBtn = document.getElementById('sub');
let loading2 = false;
subBtn.addEventListener('click', function() {
  if (loading2) return;
  loading2 = true;
  countOpt.sub().finally(() => {
    loading2 = false;
  });
})