/**
 * 发布-订阅模式 存在三个角色：订阅者 + 发布者 + 调度中心
 * 订阅者和发布者不直接接触，通过调度中心来操作
 * 而观察者模式 只存在两个角色：订阅者 + 发布者
 * 订阅者和发布者直接接触
 * 举个例子理解：
 * 韩梅梅把所有的开发者拉了一个群，直接把需求文档丢给每一位群成员，这种发布者直接触及到订阅者的操作，叫观察者模式。
 * 但如果韩梅梅没有拉群，而是把需求文档上传到了公司统一的需求平台上，需求平台感知到文件的变化、自动通知了每一位订阅了该文件的开发者，这种发布者不直接触及到订阅者、而是由统一的第三方来完成实际的通信的操作，叫做发布-订阅模式。
 */
class Topics {
  topics = {}; // key 为发布者的name，value 为订阅这个发布的订阅者

  addSub(name, sub) {
    if (!this.topics[name]) {
      this.topics[name] = [sub];
    } else {
      this.topics[name].push(sub);
    }
  }
  
  notice(name, content) {
    console.log('this.topics', this.topics[name]);
    (this.topics[name] || []).map((sub) => {
      sub.subscribe(content);
    })
  }
}

const top1 = new Topics();

// 发布者，只负责发布内容到调度中心
class Publish {
  constructor(name) {
    this.name = name;
  }
  publish() {
    top1.notice(this.name, '这是发布的内容11111')
  }
}


// 订阅者，通过调度中心监听某个发布者
class Sub {
  constructor(name) {
    this.name = name;
  }

  subscribe(content) {
    console.log(`这是${this.name}订阅的${content}`)
  }
}

const sub1 = new Sub('jiang');
const sub2 = new Sub('tlp');

top1.addSub('前端', sub1);
top1.addSub('前端', sub2);

const publish1 = new Publish('前端');
publish1.publish();