// -------------------------- Home work --------------------------
// -------------------------- Дорошенко Никита Андреевич --------------------------


// События. Задачи.

// #1
// let btn = document.querySelector('button');
// btn.addEventListener('click', function () { alert (btn.getAttribute('data-text')); });

// #2
// let btn = document.querySelector('button');

// btn.addEventListener('mouseover', function (e) { 
// 	btn.style.backgroundColor = "red"; 
// });

// btn.addEventListener('mouseout', function (e) { 
// 	btn.style.backgroundColor = ""; 
// });


// #3
// let btn1 = document.getElementById('btn-msg');
// let btn2 = document.getElementById('btn-generate');
// let list = document.getElementById('tag');
// let ul = document.querySelector('ul');

// btn1.addEventListener('click', function () { console.log(btn1.getAttribute('id')); });
// btn2.addEventListener('click', function () { console.log(btn2.getAttribute('id')); });
// list.addEventListener('click', function () { console.log(list.getAttribute('id')); });
// ul.addEventListener('click', function () { console.log(list.getAttribute('id')); });

// #4
// let btn2 = document.getElementById('btn-generate');
// btn2.addEventListener('click', function () {
// 	let li = document.createElement('li');
// 	document.querySelector('ul').appendChild(li);
// 	document.querySelector('ul').lastChild.insertAdjacentHTML('beforeend', 'Item ' + document.getElementsByTagName('li').length)
// });

// #6
 // let menu = document.querySelector('div');
 // let spn = document.querySelector('span');

 // spn.addEventListener('click', function () {
 // 	menu.classList.toggle('d-none')
 // })

 // let menu2 = document.querySelector('ul').childNodes[9].childNodes[3];
 // let spn2 = document.querySelector('ul').childNodes[9].firstChild.nextSibling;

 //  spn2.addEventListener('click', function () {
 // 	menu2.classList.toggle('d-none')
 // })

 // console.log(document.querySelector('ul').childNodes[9].childNodes[3])