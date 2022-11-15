const text = document.getElementById('text-input');
const paragraph = document.getElementById('meme-text');
const imgReceiver = document.getElementById('meme-image');
const image = document.getElementById('meme-insert');
const container = document.getElementById('meme-image-container');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');
let upload = '';

function textInput() {
  const word = text.value;
  paragraph.innerText = word;
}

function imgInsert() {
  const reader = new FileReader();
  function read() {
    upload = reader.result;
    imgReceiver.src = `${upload}`;
  }
  reader.addEventListener('load', read);
  reader.readAsDataURL(this.files[0]);
}

function fireChange() {
  container.style.border = '3px dashed red';
}

function waterChange() {
  container.style.border = '5px double blue';
}

function earthChange() {
  container.style.border = '6px groove green';
}

function imgChange1() {
  imgReceiver.src = 'imgs/meme1.png';
}

function imgChange2() {
  imgReceiver.src = 'imgs/meme2.png';
}

function imgChange3() {
  imgReceiver.src = 'imgs/meme3.png';
}

function imgChange4() {
  imgReceiver.src = 'imgs/meme4.png';
}

meme4.addEventListener('click', imgChange4);
meme3.addEventListener('click', imgChange3);
meme2.addEventListener('click', imgChange2);
meme1.addEventListener('click', imgChange1);
earth.addEventListener('click', earthChange);
water.addEventListener('click', waterChange);
fire.addEventListener('click', fireChange);
text.addEventListener('keyup', textInput);
image.addEventListener('change', imgInsert);
