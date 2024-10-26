// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Problem one
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

function minMaxValue(array) {
  let minValue = 0;
  let maxValue = 0;

  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) continue;
    if (array[i] < minValue) {
      minValue = array[i];
    }
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  return maxValue - minValue;
}

// const test = minMaxValue(temperatures);
// console.log(test);

// Problem 2

const temperatures2 = [3, -222, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures3 = [3, 45, -6, -1, 'error', 9, 13, -17, 15, 14, 9, 5];

function multipleMinMaxApliputde(array1, array2) {
  let array1Amplitude = minMaxValue(array1);
  let array2Amplitude = minMaxValue(array2);
  return [array1Amplitude, array2Amplitude];
}

let multipleMinMaxApliputudeResult = multipleMinMaxApliputde(
  temperatures2,
  temperatures3
);
console.log(
  multipleMinMaxApliputudeResult[0],
  multipleMinMaxApliputudeResult[1]
);

// Problem 3 łączenie tablic/list

function minMaxValueNew(array1, array2) {
  let arrayCombine = array1.concat(array2);
  let minValue = 0;
  let maxValue = 0;

  for (let i = 0; i < arrayCombine.length; i++) {
    if (isNaN(arrayCombine[i])) continue;
    if (arrayCombine[i] < minValue) {
      minValue = arrayCombine[i];
    }
    if (arrayCombine[i] > maxValue) {
      maxValue = arrayCombine[i];
    }
  }
  return maxValue - minValue;
}

console.log(minMaxValueNew(temperatures2, temperatures3));
