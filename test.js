function stdev(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  var avg2 = total / arr.length;
  var squareDiffs = arr.map(function(value) {
    var diff = value - avg2;
    var sqrDiff = diff * diff;
    return sqrDiff;
  });
  var avgSquareDiff = average(squareDiffs);
  var stdDev = round(Math.sqrt(avgSquareDiff));
  return stdDev;
}

console.log(stdev([2,4,4,4,5,5,7,9]));
console.log(stdev([2,4,4,4,5,5,7,9]));
console.log(stdev([2,4,4,4,5,5,7,9]));

function average(data) {
  var sum = data.reduce(function(sum, value) {
    return sum + value;
  }, 0);
  var avg = sum / data.length;
  return avg;
}
function round(number) {
  return Math.round(number * 100) / 100;
}