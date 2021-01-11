class Person14{
    public readonly _name:string
    constructor(name: string){
        this._name = name
    }
}

const person14 = new Person14('css')
console.log(person14._name);


//                //
// 抽象类  规定继承的子类必须要有这个方法，业务逻辑不同
abstract class Girl{
    abstract skill()
}
class Waiter extends Girl{
    skill(){
        console.log('普通');
        
    }
}

class BaseTeacher extends Girl{
    skill(){
        console.log('基础');
        
    }
}

class senior extends Girl{
    skill(){
        console.log('高级');
        
    }
}