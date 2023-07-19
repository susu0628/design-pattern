/**
 * 缓存代理: 可以为一些开销大的运算结果提供暂时的存储，在下次运算时，如果传递进来的参数跟之前一致，则可以直接返回前面存储的运算结果。
 * eg: 计算XX之和
 */

function add(params) {
  console.log('重新计算');
  const paramsArr = Array.from(params);
  return paramsArr.reduce((total, value) => {
    return total += value
  }, 0)
}

function proxyAddAll () {
  let localParamsoMap = {};
  return (...arguments) => {
    const key = Array.from(arguments).join(',')
    if (!localParamsoMap[key]) {
      const value = add(arguments);
      localParamsoMap[key] = value;
      return value
    }

    return localParamsoMap[key];
  }
}

const test = proxyAddAll();
console.log(test(1, 2, 3, 4));
console.log(test(1, 2, 3, 4, 5));
console.log(test(1, 2, 3, 4));
console.log(test(1, 2, 3, 4, 5));

/**
 * 打印结果如下：
 * 重新计算
 * 10
 * 重新计算
 * 15
 * 10
 * 15
 */

