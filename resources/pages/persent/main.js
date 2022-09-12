var percent = [
  { name: "윷놀이에서 모가 나올 확률", per: 256000, number: "0", hw: "2.56%" },
  {
    name: "윷놀이에서 윷이 나올 확률",
    per: 1296000,
    number: 1,
    hw: "12.96%",
  },
  {
    name: "윷놀이에서 도가 나올 확률",
    per: 1536000,
    number: 2,
    hw: "15.36%",
  },
  {
    name: "윷놀이에서 개, 걸이 나올 확률",
    per: 3456000,
    number: 3,
    hw: "34.56%",
  },
  { name: "지금 당장 지구가 멸망할 확률", per: 0, number: 4, hw: "0%" },
  { name: "쿠킹덤에서 레전나올 확률", per: 5400, number: 5, hw: "0.054%" },
  { name: "길가다가 벼락맞을 확률", per: 350, number: 6, hw: "1 / 280000" },
  { name: "로또 당첨 확률", per: 1.2277, number: 7, hw: " 1 / 8,000,000" },
  {
    name: "7907 차량이 실수로 차를 박았는데 사고당한 차량도 7907이고, 출동한 경찰차도 7907일 확률",
    per: 0.01,
    number: 8,
    hw: "1 / 1,000,000,000,000",
  },
  {
    name: "화투에서 광을 뽑을 확률",
    per: 10417,
    number: 9,
    hw: "0.10417%",
  },
  {
    name: "랜덤다이스에서 전설뽑을 확률",
    per: 100000,
    number: 10,
    hw: "1%",
  },
  {
    name: "주사위 돌려서 원하는 수가 나올 확률",
    per: 1666000,
    number: 11,
    hw: "16.6666%",
  },
  {
    name: "사원이 대리로 승진할 확률",
    per: 5000000,
    number: "8",
    hw: "50%",
  },
  {
    name: "대리에서 과장으로 승진할 확률",
    per: 2600000,
    number: "8",
    hw: "26%",
  },
  {
    name: "과장에서 부장으로 승진할 확률",
    per: 1400000,
    number: "8",
    hw: "14%",
  },
  {
    name: "부장에서 이사로 승진할 확률",
    per: 800000,
    number: "8",
    hw: "8%",
  },
  {
    name: "이사에서 사장으로 승진할 확률",
    per: 200000,
    number: "8",
    hw: "2%",
  },
  {
    name: "당신이 4년제 대학에 들어갈 확률 (평균)",
    per: 5340000,
    number: "8",
    hw: "53.4%",
  },
  {
    name: "당신이 서울대에 합격할 확률",
    per: 51800,
    number: "8",
    hw: "0.518%",
  },
  {
    name: "21세 남성이 80세까지 살 확률",
    per: 4400000,
    number: "8",
    hw: "44%",
  },
  {
    name: "포커 중 <b>로열 스트레이트 플러시</b>를 잡을 확률",
    per: 1.54,
    number: "8",
    hw: "0.000154%",
  },
  {
    name: "백만장자와 데이트할 확률",
    per: 46500,
    number: "8",
    hw: "0.465%",
  },
  {
    name: "화투에서 광을 뽑을 확률",
    per: 10417,
    number: "8",
    hw: "0.10417%",
  },
  {
    name: "상어에게 공격당해 죽을 확률",
    per: 0.33,
    number: "8",
    hw: "1 / 300,000,000",
  },
  {
    name: "비행기 사고로 죽을 확률",
    per: 3.3,
    number: "8",
    hw: "1 / 30,000,000",
  },
  {
    name: "집안에서 사고로 죽을 확률",
    per: 39,
    number: "8",
    hw: "0.00039%",
  },
  {
    name: "왕족과 결혼할 확률",
    per: 200,
    number: "8",
    hw: "0.002%",
  },
  {
    name: "이란성 쌍둥이를 낳을 확률",
    per: 250,
    number: "8",
    hw: "0.0025%",
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
  var perc = closest(inp.value * 100000, percent);
  console.log();
  res.innerHTML = perc.hw + " :<br><br>" + perc.name;
});
