/**
 * 装饰器模式：不改变原对象的基础上，对其进行包装拓展，使原对象可以满足用户更复杂的需求
 * 迭代需求1：每次点击按钮，提示快去登录。用ES7中装饰器语法的方式实现
 * 参考：https://juejin.cn/book/6844733790204461070/section/6844733790271569928?enter_from=course_center&utm_source=course_center
 * 
 * ES7 装饰器的三隔参数
 * - target 被装饰的类本身 eg: Button 类
 * - name 修饰的目标属性的属性名 eg: onClick
 * - descriptor 修饰的目标属性的属性描述对象
 *   - 数据描述符 value writable enumerable configurable
 *   - 操作描述符 get set
 */

// ES7 类装饰器
function classDecorator (target) {
  target.hasDecorator = true;
  return target;
}

// ES7 方法装饰器
function funcDecorator (target, name, descriptor) {
  let originMethod = descriptor.value;
  descriptor.value = function () {
    console.log('方法装饰器测试测试');
    return originMethod.apply(this, arguments)
  }
  return descriptor
}

@classDecorator
class Button {

  @funcDecorator
  onClick() {
    console.log('测试测试')
  }
}

console.log(Button.hasDecorator) // true
const btn = new Button();
btn.onClick();
// 方法装饰器测试测试 
// 测试测试
