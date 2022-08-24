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

wob.addEventListener('change', function() {
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
        numbering.innerText = 'ㅇㄴ 욕심;;';
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