function sum(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

// console.log(sum(1, 2, 3, 4)); //=== 10;
// console.log(sum(1, 2, 3, 4, 5)); //===15;

Function.prototype.myBind = function(ctx, ...args) {
    return (...callArgs) => this.apply(ctx, args.concat(callArgs))
}
 
// don't forget meeee
Function.prototype.curry = function (numArgs) {
  const that = this; //js magic // WAT
  let numbers = [];
  function _curriedSum(num) {
    numbers.push(num)
    if (numbers.length === numArgs) {
      // null; that = sumThree; this doesn't matter cause not used in sumThree
      // meow.apply(dogInstance, argPassIntoMeow)
      that.apply(this, numbers);
    } else {

      return _curriedSum;
    }

  }
  return _curriedSum;
}

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log((sumThree(4, 20, 6))); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

// or more briefly:
sumThree.curry(3)(4)(20)(6); // == 30

//non monkey patch
// function curriedSum(numArgs) {
//   let numbers = [];
//   function _curriedSum(num) {
//     numbers.push(num)
//     if (numbers.length === numArgs) {
//       let sum = 0;
//       for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//       }

//       return sum;
//     } else {

//       return _curriedSum;
//     }

//   }
//   return _curriedSum;
// }

// const sum2 = curriedSum(4);
// console.log(sum2(5)(30)(20)(1)); // => 56

//Function.prototype aka monkey patch