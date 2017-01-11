/**
 * generator函数 函数执行返回的是一个封闭了多个内部状态的状态机(yield),
 * 可以通过next遍历多个状态
 * 函数执行过程中遇到yeild会停下来，等next来调用；最后到return 或者函数体结束。整个函数执行结束
 */

function *helloGenerator() {
  yield 'hello'
  yield 'generator'
  return 'ending'
}

var result = helloGenerator()

console.log(result.next())

console.log(result.next())

console.log(result.next())

// 任意一个对象的 Symbol.iterator 方法，等于该对象的遍历器生成函数(generator)，可以通过...运算符遍历

var myIterable = {
  [Symbol.iterator]: function*(){
    yield 1;
    yield 2;
    yield 3;
  }
}


/**
 * 遍历generator的几种方式 ...延展函数，解构赋值， for of ,Array.from
 */
// console.log([...myIterable])
// for(let i of myIterable) {
//   console.error(i)
// }
Array.from(myIterable)

function* f() {
  console.log('我执行了')
}

var g = f()

setTimeout(function(){
  g.next()
}, 2000)


