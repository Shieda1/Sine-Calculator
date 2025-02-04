const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const result = document.getElementById('result');

// radio buttons
const sineAngleRadio = document.getElementById('sineAngleRadio');
const oppositeAngleRadio = document.getElementById('oppositeAngleRadio');
const hypotenuseAngleRadio = document.getElementById('hypotenuseAngleRadio');

let sineAngle;
let oppositeAngle = v1;
let hypotenuseAngle = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

sineAngleRadio.addEventListener('click', function() {
  variable1.textContent = 'Opposite Angle';
  variable2.textContent = 'Hypotenuse Angle';
  oppositeAngle = v1;
  hypotenuseAngle = v2;
  result.textContent = '';
});

oppositeAngleRadio.addEventListener('click', function() {
  variable1.textContent = 'Sine Angle';
  variable2.textContent = 'Hypotenuse Angle';
  sineAngle = v1;
  hypotenuseAngle = v2;
  result.textContent = '';
});

hypotenuseAngleRadio.addEventListener('click', function() {
  variable1.textContent = 'Sine Angle';
  variable2.textContent = 'Opposite Angle';
  sineAngle = v1;
  oppositeAngle = v2;
  result.textContent = '';
});

btn1.addEventListener('click', function() {
  
  if(sineAngleRadio.checked) {
    if(isNaN(computeSineAngle()))
      result.textContent = "wrong input";
    else
      result.textContent = `Sine Angle = ${computeSineAngle().toFixed(4)}`;
  }

  else if(oppositeAngleRadio.checked) {
    if(isNaN(computeOppositeAngle()))
      result.textContent = "wrong input";
    else
      result.textContent = `Opposite Angle = ${computeOppositeAngle().toFixed(4)}`;
  }
    

  else if(hypotenuseAngleRadio.checked) {
    if(isNaN(computeHypotenuseAngle()))
      result.textContent = "wrong input";
    else
      result.textContent = `Hypotenuse Angle = ${computeHypotenuseAngle().toFixed(4)}`;
  }
})

btn2.addEventListener('click', function() {
  
  v1.value = '';
  v2.value = '';
  result.textContent = '';
})

// calculation

function computeSineAngle() {
  return Number(oppositeAngle.value) / Number(hypotenuseAngle.value);
}

function computeOppositeAngle() {
  return Number(sineAngle.value) * Number(hypotenuseAngle.value);
}

function computeHypotenuseAngle() {
  return Number(oppositeAngle.value) / Number(sineAngle.value);
}

// design

const nav = document.querySelector(".nav"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

// progress

var scroll = this.document.querySelector('.scrollTop');

window.addEventListener('scroll', function() {
  scroll.classList.toggle('active', window.scrollY > 150)

  
})

scroll.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

// end progress