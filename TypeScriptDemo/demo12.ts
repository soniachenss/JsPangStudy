class Person12{
    public name : string;
    constructor(name:string){
        this.name = name
    }
}
// 等同于
class Person12_1{
    constructor(public name:string){}
}

class Teacher12 extends Person12_1{
    constructor(public name: string){
        super('css')
    }
}


const person12 = new Person12('css')
console.log(person12.name);
