class Xiaojj13{
    constructor(private _age:number){
        
    }
    get age(){
        return this._age-10
    }
    set age(age:number){
        this._age = age
    }
}

const dajiao13 = new Xiaojj13(28)
dajiao13.age = 25

console.log(dajiao13.age);


class Girl13{
    static sayLove(){
        return '520'
    }
}

// const girl13 = new Girl13()
console.log(Girl13.sayLove());


