var test = document.getElementById('test'); //кубик 1
var test2 = document.getElementById('test2');//кубик 2
var test3 = document.getElementById('test3');// кубик 3

document.body.style.background='url(https://cdn.dribbble.com/users/14797/screenshots/2318137/xwing_1x.jpg)';

 
    






var block = document.getElementById('block');


document.onmousemove = function(event){
	block.style.left = event.clientX + 'px';
} //событие для курсора мыши



var fall = 0;
var fall2 = 0;
var fall3 = 0;

var timer;


move();
function move(){
	test.style.marginTop = fall + 'px';
	fall= fall + 5;
	timer = setTimeout(move, 50);

 if (fall >=500){
       test.style.marginTop = 0;
       fall = 0;
   }
}


move2();
function move2(){
	test2.style.marginTop = fall2 + 'px';
	fall2= fall2 + 7;
	timer = setTimeout(move2, 45);

 if (fall2 >=500){
       test2.style.marginTop = 0;
       fall2 = 0;
   }
}

move3();
function move3(){
	test3.style.marginTop = fall3 + 'px';
	fall3= fall3 + 9;
	timer = setTimeout(move3, 40);

 if (fall3 >=500){
       test3.style.marginTop = 0;
       fall3 = 0;
   }
}

document.getElementById('stop').onclick = function(){
	clearTimeout(timer);
}