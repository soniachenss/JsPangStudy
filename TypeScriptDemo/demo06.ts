const numberArr : number[] = [1,2,3]
const stringArr : string[] = ['a','b','c']
const undefinedArr : undefined[] = [undefined,undefined]
const arr : (number | string)[] = [1,'a',2]


//  type alias 类型别名

type Lady = {name: string,age: number}
// const xiaojiejieArr : Lady[] = [
//     {name: 'liu',age: 18},
//     {name: 'xie',age: 28},
// ]

class Madam {
    name: string;
    age: number;
}
const xiaojiejieArr : Madam[] = [
    {name: 'liu',age: 18},
    {name: 'xie',age: 28},
]

