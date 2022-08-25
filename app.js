// https://calculator.swiftutors.com/sine-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
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

btn.addEventListener('click', function() {
  
  if(sineAngleRadio.checked)
    result.textContent = `Sine Angle = ${computeSineAngle().toFixed(2)}`;

  else if(oppositeAngleRadio.checked)
    result.textContent = `Opposite Angle = ${computeOppositeAngle().toFixed(2)}`;

  else if(hypotenuseAngleRadio.checked)
    result.textContent = `Hypotenuse Angle = ${computeHypotenuseAngle().toFixed(2)}`;
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