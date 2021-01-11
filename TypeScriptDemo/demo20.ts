// 函数中泛型
// 泛型  定义的时候不指定类型， 调用的时候指定
function join<T>(first: T, seconed: T){
    return `${first}${seconed}`
}
join<string>('css','.com')
join<number>(1,2)
// 多个泛型
function joins<T, P>(first: T, seconed: P){
    return `${first}${seconed}`
}
joins<string,number>('css',1)

// 泛型中数组的使用
// function myFun<ANY>(params:ANY[]){
//     return params;
// }
// 或者
// 一般大家泛型的写法都是T
function myFun<T>(params: Array<T>){
    return params;
}

myFun<string>(["123","456"])