interface Waiter18{
    anjiao:boolean;
    say:()=>{}
}

interface Teacher18{
    anjiao: boolean;
    skill:()=>{}
}

// 联合类型
// 类型保护-类型断言
function judgeWho(animal: Waiter18 | Teacher18){
    if(animal.anjiao){
        (animal as Teacher18).skill()
    }else{
        (animal as Waiter18).say()
    }
}
// 类型保护-in
function judgeWhoTwo(animal: Waiter18 | Teacher18){
    if('skill' in animal){
        animal.skill()
    }else{
        animal.say()
    }
}
// 类型保护-typeof
function add(first : string | number, second: string | number){
    if(typeof first === "string" || typeof second === "string"){
        return `${first}${second}`
    }
    return first + second;
}
// 类型保护-instanceof   只能用在类上
class NumberObj{
    count : number;
}
function addObj(first: Object | NumberObj, second: object | NumberObj){
    if(first instanceof NumberObj && second instanceof NumberObj){
        return first.count + second.count;
    }
    return 0;
}
