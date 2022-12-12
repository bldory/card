var numberList = [
  { zero: 0, per: 0, id: "아무것도 없는 수", sosu: 0 },
  {
    zero: 0,
    per: 1,
    id: "소수도, 합성수도 아닌 수/1초의 299,792,458분의 1이라는 시간 동안 빛이 진공 상태에서 나아가는 거리(m)/갓 태어난 아이의 한국 나이/모든 수의 0제곱의 값/확률론에서 확률의 최댓값/통계학에서 결정계수의 최댓값/삼각수이고 동시에 제곱수인 수/nHr = nCr이도록 하는 r의 값/유일하게 n의 관계없이 n각수가 될 수 있는 수/제곱수, 세제곱수, 네제곱수 등 n의 값에 관계없이 n제곱수가 될 수 있는 유일한 수/소비자이론에서, 모든 재화의 소득탄력성의 가중평균/등비수열 자체는 수렴하지만 이 수열의 무한합은 수렴하지 않도록 하는 유일한 공비/헤그너 수/두 번째 뮌하우젠 수/2번째 대칭수/집합 판별 함수의 이름자로 쓰이는 수/환(ring)의 곱셈에 대한 항등원의 표기/○△□게임에서의 오일남의 참가 번호",
    sosu: 0,
  },
  {
    zero: 0,
    per: 2,
    id: "가장 작은 소수/가장 작은 왼편 절단 가능 소수/가장 작은 오른편 절단 가능 소수/가장 작은 양편 절단 가능 소수/가장 작은 양면 소수/가장 작은 재배열 가능 소수/유일한 짝수 소수/첫 번째 소피 제르맹 소수/두 번째 하샤드 수/세 번째 피보나치 수/세 번째 벨 수/가장 작은 불가촉 수/n + n = n²가 되는 유일한 수",
    sosu: 0,
  },
  {
    zero: 2,
    per: 48,
    id: "지구의 나이",
    sosu: 0,
  },
];

$('input[name="rad"]').click(function () {
  jari = $('input[name="rad"]:checked').val();
  title.innerText = dnumber + jari;
});

var zero = 0;

var jarisu = 0;

var jariNum = [
  {
    id: "il",
    j: 0,
  },
  {
    id: "man",
    j: 4,
  },
  {
    id: "uk",
    j: 8,
  },
  {
    id: "jo",
    j: 12,
  },
  {
    id: "gung",
    j: 16,
  },
  {
    id: "hae",
    j: 20,
  },
];

var jari = $('input[name="rad"]:checked').val();

var dnumber = 0;

/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */

function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var title = document.getElementById("ntit");
var mun = document.getElementById("mun");

var finalnumber;

function number(e) {
  dnumber = $("#num").val();
  console.log(dnumber);
  switch (jari) {
    case "":
      finalnumber = 0;
      console.log(jari);
      console.log(finalnumber);
      break;
    case "만":
      finalnumber = 1;
      break;
    case "억":
      finalnumber = 2;
      break;
    case "조":
      finalnumber = 3;
      break;
    case "경":
      finalnumber = 4;
      break;
    case "해":
      finalnumber = 5;
      break;
  }
  title.innerText = dnumber + jari;

  console.log(dnumber);

  numberArray = numberList
    .find((x) => x.zero == finalnumber && x.per == dnumber)
    .id.split("/")[
    rand(
      0,
      numberList
        .find((x) => x.zero == finalnumber && x.per == dnumber)
        .id.split("/").length
    )
  ];
  mun.innerText = "『" + numberArray + "』";
}
