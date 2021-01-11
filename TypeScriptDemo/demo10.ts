// 父类
class LadyGirl{
    content = 'Hi,ts'
    sayHello(){
        return this.content
    }
}
// 子类
class xiaojj10 extends LadyGirl {
    // 重写
    sayHello(){
        return super.sayHello() + '. 你好！' 
    }
    sayLove(){
        return '520'
    }
}

const goddess = new xiaojj10()

console.log(goddess.sayHello());
console.log(goddess.sayLove());