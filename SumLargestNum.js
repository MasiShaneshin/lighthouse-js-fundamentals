let first;
let second;
let index;
const sumLargestNumbers = function(data) {
  //for first number
  for (let i = 0; i < data.length; i++) {
    if (i == 0) {

      if (data[i] > data[i+1]) {
        first = data[i];
        index= i;
      }
      else {
        first= data[i] + 1;
        index= i + 1;
      } 
    } else {
      if (first < data[i + 1]) {
        first = data[i + 1];
        index = i + 1;
      }     
    }
  }
 //for second number
 data.splice(index,1);
 for (let j= 0; j < data.length; j++) {
  if (j== 0) {

    if (data[j] > data[j+1]) {
      second= data[j];
    }
    else {
      second = data[j] + 1;
    } 
  } else {
    if (second < data[j + 1]) {
      second= data[j + 1];
    }     
  }
}
let sum = second + first;
return sum;
}

 
   
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));