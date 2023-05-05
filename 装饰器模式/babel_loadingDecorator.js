'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _desc, _value, _class;

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

var addBtn = document.getElementById('add');
var subBtn = document.getElementById('sub');
var countP = document.getElementById('count');

function loadingDecorator(key) {
  console.log('key', key);
  return function (target, name, descriptor) {
    var originMethod = descriptor.value;
    descriptor.value = function () {
      if (target[key]) {
        return;
      }
      target[key] = true;
      return originMethod.apply(this, arguments).finally(function () {
        target[key] = false;
      });
    };
  };
}

var CountText = (_dec = loadingDecorator('loading1'), _dec2 = loadingDecorator('loading2'), (_class = function () {
  function CountText(count) {
    _classCallCheck(this, CountText);

    this.count = count;
  }

  _createClass(CountText, [{
    key: 'add',
    value: function add() {
      var _this = this;

      return new Promise(function (resolve) {
        setTimeout(function () {
          _this.count += 1;
          countP.innerText = _this.count;
          resolve();
        }, 1000);
      });
    }
  }, {
    key: 'sub',
    value: function sub() {
      var _this2 = this;

      return new Promise(function (resolve) {
        setTimeout(function () {
          _this2.count -= 1;
          countP.innerText = _this2.count;
          resolve();
        }, 1000);
      });
    }
  }]);

  return CountText;
}(), (_applyDecoratedDescriptor(_class.prototype, 'add', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'add'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'sub', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'sub'), _class.prototype)), _class));


var countOpt = new CountText(0);
addBtn.addEventListener('click', function () {
  countOpt.add();
});

subBtn.addEventListener('click', function () {
  countOpt.sub();
});
