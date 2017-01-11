class Person {
  @noenumerable
  get kidCount() {
    return this.children.length
  }
}

Object.defineProperty(Person.prototype, 'first', {
  value: 'chui',
  enumerable: false,
  configurable: true,
  writable: true
})

Object.defineProperty(Person.prototype, 'last', {
  value: 'lee',
  enumerable: false,
  configurable: true,
  writable: true
})

let descriptor = {
  type: 'accessor',
  get: function() {
    return this.value
  },
  enumerable: true,
  configurable: true
}

function noenumerable(target, name, description) {
  descriptor.enumerable = false;
  return descriptor
}

let stu1 = new Person()

console.log(stu1.kidCount())
