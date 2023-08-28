class Publish {
  subs = [];

  addSubs(sub) {
    this.subs.push(sub)
  }

  publish() {
    this.subs.map((sub) => {
      sub.notify();
    })
  }
}


class Sub {
  constructor(name) {
    this.name = name;
  }

  notify() {
    console.log(`${this.name}要开始工作啦！`)
  }
}

const publish = new Publish();
const sub1 = new Sub('jiang');
const sub2 = new Sub('tlp');

publish.addSubs(sub1);
publish.addSubs(sub2);

publish.publish();
