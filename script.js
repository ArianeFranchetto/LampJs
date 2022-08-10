const turnOn = document.getElementById ( 'turnOn');
const turnOff = document.getElementById (
'turnOff');
const lamp = document.getElementById (
'lamp');

function lampOn () {
  lamp.src = 'https://raw.githubusercontent.com/fernandoleonid/mini-projetos-js/master/01-lamp/img/ligada.jpg'
}

function lampOff () {
  lamp.src = 'https://raw.githubusercontent.com/fernandoleonid/mini-projetos-js/master/01-lamp/img/desligada.jpg'
}

function lampBroken () {
  lamp.scr= 'https://github.com/fernandoleonid/mini-projetos-js/blob/master/01-lamp/img/quebrada.jpg?raw=true';
}


turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ( 'click', lampOff );
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);


