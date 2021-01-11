//  private protected piblic
// public 类的内部和类的外部
// private  类的内部
// protected 类的内部 + 继承
class Person11{
    public name: string;
    public sayHello(){
        console.log(this.name + ' hello');
        
    }
}
class Teacher11 extends Person11{
    public sayBye(){
        this.name
    }
}

const person = new Person11()
person.name = 'css'
person.sayHello()
console.log(person.name);

