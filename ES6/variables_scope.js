console.log(a)
var a = 10
function b() {
    console.log(a)
    var a=b=20  // b 全局变量
}
b()
console.log(b)