// interface Girl {
//     name: string;
//     age: number;
//     bust: number;
//     waistline?: number;
//     [propname: string]: any;
//     say(): string;

// }
// const girl = {
//     name: '大脚',
//     age: 18,
//     bust: 94,
//     waistline: 21,
//     sex: '女',
//     say(){
//         return '欢迎光临'
//     },
//     teach(){
//         return '我来教你'
//     }
// }
// interface Teacher extends Girl {
//     teach(): string;
// }

// class Xiaojiejie09 implements Girl {
//     name = 'loi'
//     age = 18
//     bust = 90
//     say(){
//         return '欢迎光临'
//     }
// }

// const screenResume = (girl: Girl) => {
//     girl.age < 24 && girl.bust >= 90 && console.log(girl.name+'进入面试');
//     girl.age >= 24 || girl.bust < 90 && console.log(girl.name+'你被淘汰了');
// }

// const getResume = (girl: Teacher) => {
//     console.log(girl.name + '年龄是' + girl.age);
//     console.log(girl.name + ' xws '  + girl.bust);
//     girl.waistline && console.log(girl.name + ' yaoweishi '  + girl.waistline);
//     girl.sex && console.log(girl.name + ' 性别是 '  + girl.sex);
    
    
// }


// screenResume(girl);
// getResume(girl)