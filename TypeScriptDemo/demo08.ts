// interface Girl {
//     name: string;
//     age: number;
//     bust: number;
//     waistline?: number;

// }
// const girl = {
//     name: '大脚',
//     age: 18,
//     bust: 94,
//     waistline: 21,
// }

// const screenResume = (girl: Girl) => {
//     girl.age < 24 && girl.bust >= 90 && console.log(girl.name+'进入面试');
//     girl.age >= 24 || girl.bust < 90 && console.log(girl.name+'你被淘汰了');
// }

// const getResume = (girl: Girl) => {
//     console.log(girl.name + '年龄是' + girl.age);
//     console.log(girl.name + ' xws '  + girl.bust);
//     girl.waistline && console.log(girl.name + ' yaoweishi '  + girl.waistline);
    
// }


// screenResume(girl);
// getResume(girl)