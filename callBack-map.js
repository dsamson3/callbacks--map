var words = ["ground", "control", "to", "major", "tom"];


function map (words, cb)
{
  var arr = [];
  words.forEach(function(element)
  {
    arr.push(cb(element));

  });
  return arr;
}

var test = map(words, function(word) {
  return word.length;
});
console.log(test);
test = map(words, function(word) {
  return word.toUpperCase();
});
console.log(test);
test = map(words, function(word) {
  return word.split('').reverse().join('');
});
console.log(test);
