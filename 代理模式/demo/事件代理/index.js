/**
 * 通过事件代理实现多个子元素的事件监听
 */
const root = document.getElementById('root');
root.addEventListener('click', (e) => {
  if (e.target.tagName = 'SPAN') {
    console.log(`${e.target.innerText}被点击了`)
  }
})