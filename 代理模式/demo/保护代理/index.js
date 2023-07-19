/**
 * 保护代理：就是在访问层面做文章，在 getter 和 setter 函数里去进行校验和拦截，确保一部分变量是安全的
 * eg: 获取个人信息
 * 利用保护代理 将性别保护起来，只有Vip才能查看和修改性别
 */

const person = {
  name: 'jiang',
  sex: 0,
  isVip: false,
}

const proxyPerson = new Proxy(person, {
  get: function (target, key) {
    if (key === 'sex' && !target.isVip) {
      console.log('您还不是Vip，暂时不能查看该用户的性别')
      return;
    }
    return target[key]
  },
  set: function (target, key, value) {

    if(key === 'sex' && !target.isVip) {
      console.log('暂不能设置性别，这是另外的价钱')
      return;
    }
    target[key] = value
  }
})

console.log(proxyPerson.name)
console.log(proxyPerson.sex)
console.log(proxyPerson.isVip)

proxyPerson.isVip = true;

proxyPerson.sex = 1;


console.log('proxyPerson', proxyPerson);
console.log('person', person);


// 参考：https://juejin.cn/book/6844733790204461070/section/6844733790271569934?enter_from=course_center&utm_source=course_center