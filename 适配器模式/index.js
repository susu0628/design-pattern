/**
 * 适配器模式：把一个类的接口变成客户端所期待的另一种接口，可以解决不兼容的问题
 * 一个好的适配器：把变化留给自己，把统一留给用户。暴露给用户的都是十分简单统一的东西 —— 统一的接口、统一的入参、统一的出参、统一的规则
 * 参考：https://juejin.cn/post/6962470884527308836
 * 需求：地图接口的适配
 */

const googleMap = {
  show() {
    console.log('开始渲染谷歌地图')
  }
}

const baiduMap = {
  display() {
    console.log('开始渲染百度地图')
  }
}

const baiduAdaptor = {
  show() {
    return baiduMap.display()
  }
}

var renderMap = function (map) {
  map.show();
}

renderMap(googleMap)
renderMap(baiduAdaptor)