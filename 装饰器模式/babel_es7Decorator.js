'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _desc, _value, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/**
 * 装饰器模式：不改变原对象的基础上，对其进行包装拓展，使原对象可以满足用户更复杂的需求
 * 迭代需求1：每次点击按钮，提示快去登录。用ES7中装饰器语法的方式实现
 * 参考：https://juejin.cn/book/6844733790204461070/section/6844733790271569928?enter_from=course_center&utm_source=course_center
 */

// ES7 类装饰器
function classDecorator(target) {
  target.hasDecorator = true;
  return target;
}

// ES7 方法装饰器
function funcDecorator(target, name, descriptor) {
  var originMethod = descriptor.value;
  descriptor.value = function () {
    console.log('方法装饰器测试测试');
    return originMethod.apply(this, arguments);
  };
  return descriptor;
}

var Button = classDecorator(_class = (_class2 = function () {
  function Button() {
    _classCallCheck(this, Button);
  }

  _createClass(Button, [{
    key: 'onClick',
    value: function onClick() {
      console.log('测试测试');
    }
  }]);

  return Button;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'onClick', [funcDecorator], Object.getOwnPropertyDescriptor(_class2.prototype, 'onClick'), _class2.prototype)), _class2)) || _class;

console.log(Button.hasDecorator); // true
var btn = new Button();
btn.onClick();
