var percent = [
  { name: "윷놀이에서 모가 나올 확률", per: 25600, number: "0" },
  { name: "윷놀이에서 윷이 나올 확률", per: 129600, number: "1" },
  { name: "윷놀이에서 도가 나올 확률", per: 153600, number: "2" },
  { name: "윷놀이에서 개, 걸이 나올 확률", per: 345600, number: "3" },
  { name: "모쏠이 여친생길 확률", per: 0, number: "4" },
  { name: "쿠킹덤에서 레전나올 확률", per: 540, number: "5" },
  { name: "길가다가 벼락맞을 확률", per: 35, number: "6" },
  { name: "로또 당첨 확률", per: 1.25, number: "7" },
  {
    name: "7907 차량이 실수로 차를 박았는데 사고당한 차량도 7907이고, 출동한 경찰차도 7907일 확률",
    per: 0.1,
    number: "8",
  },
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
  var perc = closest(inp.value * 10000, percent);
  console.log();
  res.innerText = perc.per / 10000 + "% : " + perc.name;
});
