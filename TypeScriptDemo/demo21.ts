// 类中使用泛型
class SelectGirl<T>{
    constructor(private girls: T[]){}
    getGirl(index: number): T{
        return this.girls[index]
    }
}

const selectGirl = new SelectGirl<string>(['大脚','刘莹','小红'])
const selectGirl2 = new SelectGirl<number>([18,28,38])
console.log('泛型',selectGirl.getGirl(1));
console.log('泛型',selectGirl2.getGirl(1));

// 泛型继承  
interface Girl21{
    name: string
} 
class SelectGirl2<T extends Girl21>{ //继承后必须要有name值
    constructor(private girls: T[]){}
    getGirl(index: number): string{
        return this.girls[index].name
    }
}

// 创建类的时候 泛型继承了Girl21，所以实例化的时候也需要符合Girl21的规则
const selectGirl3 = new SelectGirl2([{name:'大脚'},{name:'刘莹'},{name:'小红'}])
console.log('泛型继承',selectGirl3.getGirl(1));


// 泛型约束  泛型只能在number 或string 中选
class SelectGirl3<T extends number | string>{
    constructor(private girls: T[]){}
    getGirl(index: number): T{
        return this.girls[index]
    }
}

const selectGirl4 = new SelectGirl<string>(['大脚','刘莹','小红'])
console.log('泛型约束',selectGirl4.getGirl(1));
