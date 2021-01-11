// const Status = {
//     MASSAGE : 0,
//     SPA : 1,
//     DABAOJIAN: 2
// }

// 枚举类型 默认从0开始
enum Status{
    MASSAGE,
    SPA,
    DABAOJIAN,
}
function getServe(status:number){
    if(status === Status.MASSAGE){
        return 'massage'
    }else if(status === Status.SPA){
        return 'spa'
    }else if(status === Status.DABAOJIAN){
        return 'dabaojian'
    }
}
console.log(Status.MASSAGE);
console.log(Status.SPA);
console.log(Status.DABAOJIAN);

console.log(Status.MASSAGE,Status[1]);



const result = getServe(2)
console.log(`我要去${result}`);
