const numberOfVowels = function(data) {
  var ar = [];
  let sum=0;
  ar = data.split('');
   
  for (i = 0; i < ar.length; i++) {
  
     if (ar[i] === "a" || ar[i] === "e" || ar[i] === "i" || ar[i] === "o" || ar[i] === "u") {
       sum = sum + 1;  
  
      }
    }
     return sum;
  };
  
  
  console.log(numberOfVowels("arange"));
  console.log(numberOfVowels("orange"));
  console.log(numberOfVowels("lighthouse labs"));
