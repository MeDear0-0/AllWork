function fizzBuzz(max) {
  let changeNum = '';
  
  for (let g = 1; g <= max; g++) {
    if (g % 3 === 0 && g % 5 === 0) {
      changeNum += 'FizzBuzz';

    } else if (g % 3 === 0) {
      changeNum += 'Fizz';

    } else if (g % 5 === 0) {
      changeNum += 'Buzz';

    } else {
      changeNum += g;

    }
  }
  return changeNum;
}

module.exports = fizzBuzz
