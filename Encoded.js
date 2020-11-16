const urlEncode = function(text) {
  var res = encodeURI(text); 
  return res
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));