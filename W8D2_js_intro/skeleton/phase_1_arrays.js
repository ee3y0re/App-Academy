let array = [1,2,2,3,3,3];

Array.prototype.uniq = function() {
  let newArr = [];
  for (let i = 0; i < this.length; i++){
    if (!newArr.includes(this[i])){
      newArr.push(this[i])
    }
  }
  return newArr
}

console.log(array.uniq());

//[1,-2,2,3,3,3]
//memorize for good job ; u ;
Array.prototype.twoSum = function(target) {
  let count = {};
  for (let i = 0; i < this.length; i++) {
    let pair_index = count[target - this[i]];
    if (pair_index !== undefined) {
      var pos = [pair_index, i];
      if (pos[0] !== undefined && pos[1] !== undefined) {
        return pos
      }

    }
    count[this[i]] = i;
  }
}

let sumArr = [3, 4, -3, 1, 2]; //0, 2
console.log(sumArr.twoSum(0));

let arr = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]

Array.prototype.transpose = function() {
  let yolo = [];
  for (let i = 0; i < this.length; i++){
    let newRow = [];
    for (let j = 0; j < this[i].length; j++){
      newRow.push(this[j][i])
    }
    yolo.push(newRow)
  }
  return yolo // !!!!!!
}

console.log(arr.transpose())