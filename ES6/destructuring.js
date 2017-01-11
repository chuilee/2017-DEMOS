function fn({name: x}) {
  console.log(x)
}

fn({name: 5})

function sum({x, y, a=10, b=20}) {
  console.log(x+y+a+b)
}

sum({x:1, y: 2})
