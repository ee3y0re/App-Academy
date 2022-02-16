//procs are just callbacks
Array.prototype.myEach = function(prc) {
  for (let i = 0; i < this.length; i++) {
    prc(this[i]);
  }
}

Array.prototype.myMap = function(prc) {
  let output = [];
  this.myEach((ele) => { //closure(?)
    output.push(prc(ele));
  });

  return output;
}

let newArr = [3, 4, -3, 1, 2];
let callback = function(ele) {
  ele = ele;
  return ele;
}

console.log(newArr.myEach(callback));
console.log(newArr.myMap(callback));

Array.prototype.myReduce = function(callback, initialValue = 0) {
  this.myEach((ele) => {
    initialValue = callback(initialValue) + callback(ele);
    return initialValue;
  })
  return initialValue;
}

console.log(newArr.myReduce(callback, 0))