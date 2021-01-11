
function getTotal(one : number,two : number) : number{
    return one + two
}
const total = getTotal(1,2)


function sayHello() : void{
    console.log('hello world')
}

function errorFunction() : never{
    throw new Error()
    console.log('hello world')
}

function forNever() : never {
    while(true){}
    console.log('hello world')
}

function add5({one, two} : {one: number, two: number }){
    return one + two
}
const total5 = add5({one: 1, two:2})

function getNumber({one} : {one : number}){
    return one
}

const one = getNumber({one: 1})
