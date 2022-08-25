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
var skillname = document.getElementById('skillname');

wob.addEventListener('input', function() {
    if(wob.value == 0) {
        skill.style.color = 'black';
        skillname.style.color = "black";
        skillname.style.textShadow = "#fff 0 0 5px"
    }
    if(wob.value == 1) {
        skill.style.color = 'white';
        skillname.style.color = 'white';
        skillname.style.textShadow = "#000 0 0 5px";
    }
});

var cs = document.getElementById('cs');
cs.addEventListener('keyup', function() {
    skill.innerText = cs.value;
});

var csn = document.getElementById('csn');
csn.addEventListener('keyup', function() {
    skillname.innerText = csn.value;
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

function PrintDiv(div){
	div = div[0]
	html2canvas(div).then(function(canvas){
		var myImage = canvas.toDataURL();
		downloadURI(myImage, "card.png") 
	});
}

function downloadURI(uri, name){
	var link = document.createElement("a")
	link.download = name;
	link.href = uri;
	document.body.appendChild(link);
	link.click();
}

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