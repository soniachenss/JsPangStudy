const demoTest = require("./demo01")
const { demoTest1, demoTest2 } = demoTest

test('demoTest1 300',()=>{
    expect(demoTest1(300)).toBe('真牛')
})

test('demoTest2 300',()=>{
    expect(demoTest2(900)).toBe('超级VIP')
})
