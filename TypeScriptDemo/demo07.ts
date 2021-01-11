// 下面代码会报错
// const xjjArr : (string | number)[] = ['dajiao',18,'teacher']
// 正确
// const xjjArr : (string | number)[] = ['dajiao','teacher',18]

const xjjArr : [string,string,number] = ['dajiao','teacher',18]
//csv
const xjjsArr : [string,string,number][] = [
    ["dajiao", "teacher", 28],
    ["liuying", "teacher", 18],
    [ "cuihua", "teacher", 25],
]
