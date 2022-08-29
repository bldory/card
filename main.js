/**
 * @type number;
 */
var wi = document.getElementById('we').width;
var he = document.getElementById('we').height;

$('#we').draggable({
    scroll: false,
    containment: "#bg-container",
            
    start: function( event, ui ) {
        console.log("start top is :" + ui.position.top)
        console.log("start left is :" + ui.position.left)
    },
    drag: function(event, ui) {
        console.log('draging.....');    
    },
    stop: function( event, ui ) {
        console.log("stop top is :" + ui.position.top)
        console.log("stop left is :" + ui.position.left)
    }
});

function cardname() {
    document.getElementById('cname').innerText = document.getElementById('name').value;
    console.log(document.getElementById('name').value)
}

const im = document.getElementById('we');
let w = im.width;
let h = im.height;

let img = null;   
const fileChange = document.getElementById('file');
fileChange.addEventListener('change', function (event) {
    let reader = new FileReader();
    reader.onload = function (e){ 
        img = new Image();   
        img.src = e.target.result
        img.onload = function(){
            im.src = img.src;
        }
    };    
    reader.readAsDataURL(event.target.files[0])
});

var wob = document.getElementById('black');
var skill = document.getElementById('skill');
var skillname = document.getElementById('skillcon');
var skillname1 = document.getElementById('skillname');

wob.addEventListener('input', function() {
    if(wob.value == 0) {
        skill.style.color = 'black';
        skillname.style.color = "black";
        skillname.style.textShadow = "#fff 0 0 5px"
        atks.style.color = 'black';
        defs.style.color = 'black';
    }
    if(wob.value == 1) {
        skill.style.color = 'white';
        skillname.style.color = 'white';
        skillname.style.textShadow = "#000 0 0 5px";
        atks.style.color = 'white';
        defs.style.color = 'white';
    }
});

var cs = document.getElementById('cs');
cs.addEventListener('keyup', function() {
    skill.innerText = cs.value;
});

var csn = document.getElementById('csn');
csn.addEventListener('keyup', function() {
    skillname1.innerText = csn.value;
});

function setnumber() {
    const numbel = document.getElementById('number').value;
const numbering = document.getElementById('cardnumber');
console.log(numbel);
    if (numbel < 10) {
        numbering.innerText = '#00' + numbel;
    }
    if (10 <= numbel && numbel < 100) {
        numbering.innerText = '#0' + numbel;
    }
    if (numbel >= 100 && numbel <= 99999999) {
        numbering.innerText = '#' + numbel;
    }
    if (numbel < 0) {
        numbering.innerText = '마이너스라니';
    }
    if (numbel > 99999999) {
        numbering.innerText = '욕심이 너무 과한 것 아니오';
    }
}

$(function() {
    $('#save').on('click', function() {
        html2canvas(document.querySelector('.content')).then(canvas => {
            saveAs(canvas.toDataURL('image/png'), "card.png");
        });
    });
    function saveAs(url, filename) {
        var link = document.createElement('a');
        if(typeof link.download === "string") {
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else  {
            window.open(url);
        }
    }
});

const dragElement = (e) => {
  const MAX_WIDTH = 5000, MAX_HEIGHT = 5000;
  const elmnt = e.target;
  let = posX = 0, posY = 0, originX = 0, originY = 0, x = 0, y = 0;
  
  function mouseDown(e) {
  e.preventDefault();
  originX = e.clientX;
  originY = e.clientY;
  document.onmouseup = mouseUp;
  document.onmousemove = mouseMove;
}
  
  function mouseMove(e) {
  e.preventDefault();
  posX = e.clientX - originX;
  poxY = e.clientY - originY;
  
  if (elmnt.offsetLeft + posX >= 0 && elmnt.offsetLeft + elmnt.offsetWidth + posX <= MAX_WIDTH) {
    x = posX;
  }
  
  if (elmnt.offsetTop + posY >= 0 && elmnt.offsetTop + elmnt.offsetHeight + posY <= MAX_HEIGHT) {
    y = posY;
  }
  
  elmnt.style.transform = `translate(${x}px, ${y}px)`;
}
  
  function mouseUp(e) {
  elmnt.style.transfrom = "";
  elmnt.style.left = `${elmnt.offsetLeft + x}px`;
  elmnt.style.top = `${elmnt.offsetTop + y}px`;
  
  document.onmouseup = null;
  document.onmousemove = null;
}

  mouseDown(e);
}

function scale() {
    var val = document.getElementById('scale').value;
    document.getElementById('we').style.width = val / he * wi + 'px';
    document.getElementById('we').style.height = val + 'px';
}

/**
 * @type HTMLDivElement
 */
var rarity = document.getElementById('rarity');
/**
 * @type HTMLInputElement
 */
var rare = document.getElementById('rare');

rare.addEventListener('input', function() {
    if(rare.value == 0) {
        rarity.innerText = "NORMAL";
        rare.style.accentColor = "#aaa";
        rarity.style.background = "linear-gradient(90deg, rgba(200,252,255,1) 0%, rgba(0,128,255,1) 100%)";
    }
    if(rare.value == 1) {
        rarity.innerText = "RARE";
        rare.style.accentColor = "#";
        rarity.style.background = "linear-gradient(90deg, rgba(154,255,46,1) 0%, rgba(0,117,25,1) 100%)";
    }
    if(rare.value == 2) {
        rarity.innerText = "SUPER RARE";
        rare.style.accentColor = "#00bbf9";
        rarity.style.background = "linear-gradient(90deg, rgba(46,255,245,1) 0%, rgba(99,0,255,1) 75%)";
    }
    if(rare.value == 3) {
        rarity.innerText = "EPIC";
        rare.style.accentColor = "#f15bb5";
        rarity.style.background = "linear-gradient(90deg, rgba(136,0,255,1) 0%, rgba(208,46,255,1) 100%)";
    }
    if(rare.value == 4) {
        rarity.innerText = "MYTHICAL";
        rare.style.accentColor = "#d00";
        rarity.style.background = "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,188,46,1) 100%)";
    }
    if(rare.value == 5) {
        rarity.innerText = "LEGENDARY";
        rare.style.accentColor = "#ff9f1c";
        rarity.style.background = "linear-gradient(90deg, rgba(255,136,0,1) 0%, rgba(248,255,46,1) 100%)";
    }
    if(rare.value == 6) {
        rarity.innerText = "DLC";
        rare.style.accentColor = "#ff00c2";
        rarity.style.background = "linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,0,194,1) 45%, rgba(162,0,255,1) 100%)";
    }
    if(rare.value == 7) {
        rarity.innerText = "UNIQUE";
        rare.style.accentColor = "#cdcdcd";
        rarity.style.background = "linear-gradient(90deg, rgba(255,51,153,1) 0%, rgba(255,51,153,1) 25%, rgba(255,255,0,1) 50%, rgba(1,167,143,1) 75%, rgba(51,102,255,1) 100%)";
    }
});

var atk = document.getElementById('atk');
var atks = document.getElementById('atks');
var def = document.getElementById('def');
var defs = document.getElementById('defs');

atk.addEventListener('input', function() {
    atks.innerText = "ATK : " + atk.value;
});

def.addEventListener('input', function() {
    defs.innerText = "DEF : " + def.value;
});

var type = document.getElementsByName('type');
var sktype = document.getElementById('skilltype');

document.getElementById('subtype').onclick = function() {
    var radios = document.getElementsByName("type");
    var selected = Array.from(radios).find(radio => radio.checked);
    switch(selected.value) {
        case 'ABILLITY' :
            sktype.innerText = 'ⓐ';
            break;
        case 'BUFF' :
            sktype.innerText = 'ⓑ';
            break;
        case 'COUNTER' :
            sktype.innerText = 'ⓒ';
            break;
        case 'DEBUFF' :
            sktype.innerText = 'ⓓ';
            break;
        case 'ETC' :
            sktype.innerText = 'ⓔ';
            break;
    }
}

$( ":radio").checkboxradio();
