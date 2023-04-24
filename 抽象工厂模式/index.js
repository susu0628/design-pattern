// 抽象工厂类
class MobilePhoneFactory {

  // 提供操作系统的接口
  createOS() {
    throw new Error('抽象工厂方法不允许直接调用，你需要将我重写！')
  }

  // 提供硬件的接口
  createHardWare() {
    throw new Error('抽象工厂方法不允许直接调用，你需要将我重写！')
  }
}

// 具体工厂类，继承抽象类，实现抽象类中的方法
class FakeStarFactory extends MobilePhoneFactory {
  createOS() {
    // 提供安卓系统实例
    return new AndroidOS();
  }

  createHardWare() {
    // 提供高通硬件实例
    return new QualcommHardWare();
  }
}

// 抽象产品类
class OS {
  controlHardWare() {
    throw new Error('抽象产品方法不允许直接调用，你需要将我重写');
  }
}

// 具体产品类
class AndroidOS extends OS {
  controlHardWare() {
    console.log('Android 操作硬件');
  }
}

class AppleOS extends OS {
  controlHardWare() {
    console.log('Apple 操作硬件');
  }
}


class HardWare {
  operateByOrder() {
    throw new Error('抽象产品方法不允许直接调用，你需要将我重写');
  }
}

class QualcommHardWare extends HardWare {
  operateByOrder() {
    console.log('以高通的方式去运转');
  }
}

class MiWare extends HardWare {
  operateByOrder() {
    console.log('以小米的方式去运转');
  }
}

const myPhone = new FakeStarFactory();
const myOs = myPhone.createOS();
const myHardWare = myPhone.createHardWare();
myOs.controlHardWare();
myHardWare.operateByOrder();


/**
 * 抽象工厂模式：围绕一个超级工厂创建其他工厂
 *   本质上处理的也是类，但是是一帮非常棘手、繁杂的类，这些类中分出门派、还能划分等级，同时存在着千变万化的扩展可能性。
 * 所以，对共性作更特别的处理，使用抽象类去降低扩展的成本，同时需要对类的性质做划分。延申出了四个关键角色
 * 1、抽象工厂类（MobilePhoneFactory）：抽象类，不能被用于生成具体的实例。用于声明最终目标产品的共性，在一个系统里，抽象工厂可以有多个。
 * 2、具体工厂类（FakeStarFactory）：继承抽象工厂类，实现抽象类中的方法。用于生成产品族里的一个具体产品
 * 3、抽象产品类（OS】HardWare）：抽象类，不能被用于生成具体的实例。将具体产品类的共性各自抽离，便得到了各自的抽象产品类
 * 4、具体产品类（AndroidOS、AppleOS、QualcommHardWare、MiWare）：用于生成产品族里的一个具体产品所依赖的更细粒度的产品。
 * 对扩展封闭、对修改拓展。怎么理解？如下
 * 假如有一天，FakeStar过气了，我们需要产出一款新机投入市场，这时候怎么办？
 * 我们是不是不需要对抽象工厂MobilePhoneFactory做任何修改，只需要拓展它的种类：
 */

// 拓展新的具体工厂类：newStarFactory
class newStarFactory extends MobilePhoneFactory {
  createOS() {
      // 操作系统实现代码
  }
  createHardWare() {
      // 硬件实现代码
  }
}
