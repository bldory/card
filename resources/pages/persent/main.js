var percent = [
  { name: "윷놀이에서 모가 나올 확률", per: 2.56, number: "0" },
  { name: "윷놀이에서 윷이 나올 확률", per: 12.96, number: "1" },
  { name: "윷놀이에서 도가 나올 확률", per: 15.36, number: "2" },
  { name: "윷놀이에서 개, 걸이 나올 확률", per: 34.56, number: "3" },
];

var inp = document.getElementById("per");
var res = document.getElementById("res");

function closest(num, arr) {
  var curr = arr[0].per;
  var diff = Math.abs(num - curr);
  for (var val = 0; val < arr.length; val++) {
    var newdiff = Math.abs(num - arr[val].per);
    if (newdiff <= diff) {
      diff = newdiff;
      curr = arr[val];
    }
  }
  return curr;
}

inp.addEventListener("input", function () {
  var perc = closest(inp.value, percent);
  console.log();
  res.innerText = perc.per + "% : " + perc.name;
});
