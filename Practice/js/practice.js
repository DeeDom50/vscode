// console.log(document.URL);
// console.log(document.timeline);
// console.dir(document.body.innerHTML);
// document.body.innerHTML ="Hello World again!";

// document.write('one');
// document.write('two');

// const oneElement = document.querySelector('#one')
// oneElement.innerHTML = '<h1>TEST</h1>';

// const output1 = document.querySelector('.output');
// console.log(output1);
// for(let i = 0; i < output1.length; i++){
//     console.log(output1[i]);
//     output1[i].innerHTML = '<h1>Index :${i}</h1>';
// }

// const divs = document.getElementsByTagName('div');
// console.log(divs);

// const el1 = document.querySelector()\

// const output1 = document.querySelector('.output');
// const output2 = document.createElement('div');

// console.log(output1);
// console.log(output2);

// output1.innerHTML = 'Test 1';
// output2.innerHTML = 'Test 2';

// document.body.append(output2);
// const res1 = output1.append(output2);
// document.body.prepend(output2);

// const res2 = output1.appendChild(output2);
// console.log(res1);
// console.log(res2);

// output1.removeChild(output2);
// console.log(output2);
// output1.append(output2);

// console.log(output2.parentNode);
// output2.parentNode.removeChild(output2);

// for(let i = 0 ; i < 10; ++i){
//     const ele = document.createElement('div');
//     ele.innerText = `Index ${i}`;
//     output1.append(ele);
//}
// let html= '';
// for (let i = 0; i < 10; i++){
//    const ele = document.createElement('div')
//     html += `<div>HTML ${i}</div>`;
// }
// console.log(html);
// output1.innerHTML = html;

// const main = document.querySelector('.output');

// for (let i = 0; i < 10; i++){
//     const ele = document.createElement('div');
//     ele.textContent = `Ele ${i}`;
//     ele.classList.add('box');
//     ele.style.display = 'inline-block';
//     ele.style.border = '1px solid #eee';
//     ele.style.width = '100px';
//     ele.style.fontFamily = 'Arial';
//     main.append(ele);
// }

// const eles = document.querySelectorAll('.box');
// console.log(eles);

// eles[0].style.color = 'red';
// eles[1].style.border = '1px solid #ddd';
// eles[2].style.display = 'none';
// eles[3].style.padding = '10px';
// eles[4].style.margin = '10px';
// eles[5].style.width = '200px';
// eles[6].style.textAlign = 'right';
// eles[7].style.backgroundColor = 'yellow';
// eles[8].style.color = 'red';
// eles[9].style.border = '1px solid #ddd';

/* const ele1 = document.querySelector('h1');
// const ele2 = document.querySelector('.output');

// document.body.onload = ()=>{
//     console.log('ready');
// }
// let counter = 0;
// ele1.onclick = ()=>{
    
//     adder('clicked');
// }
// ele1.onmousedown = ()=>{
//     adder('mouse down');
// }
// ele1.onmouseup = ()=>{
//     adder('mouse up');
// }
// ele1.onmouseout = ()=>{
//     adder('mouse out');
// }
// ele1.onmouseover = ()=>{
//     adder('mouse over');
// }
// ele2.onclick = output;


// function adder(val){
//     counter++;
//     console.log(val);
//     ele2.textContent= `${val} click ${counter}`;
// }
// function output(){
//     console.log('clicked')
*/  

// const el1 = document.querySelector('h2');
// const el2 = document.querySelector('.output');
// const el3 = document.querySelector('h1');
// el2.textContent = 'click';
// let temp = document.querySelector('.output');

// for(let i = 0; i < 5; i++){
//     const ele = document.createElement('div');
//     ele.classList.add('output');
//     ele.textContent = `${i+1} Element`;
//     ele.id = `Ele${i}`;
//     ele.style.height = 300 - i*50 + 'px';
//     ele.style.width = 100 - i*50 + 'px';
//     temp.append(ele);
//     ele.addEventListener('click', ()=>{
//         console.log(i);
//     },{capture:true});
//     temp = ele;
// }

// el1.addEventListener('click', output);
// // el2.addEventListener('click', output);
// el3.addEventListener('click', output);

// function output(e){
//     console.log(e.target);
//     console.log(e.type);
// }


// // h2.addEventListener('click', (e)=>{
// //     console.log(e.type);
// // }); 
// const btns = document.querySelectorAll('button');
// const main = document.querySelector('.output');
// const main1 = document.createElement('div');
// document.body.prepend(main1);

// for(let i = 0; i < 5; i++){
//     const ele = document.createElement('div');
//     ele.style.width = '100px';
//     ele.style.display = 'inline-block';
//     ele.style.border = '1px solid black';
//     ele.textContent = `Element: ${i}`;
//     ele.addEventListener('mouse enter', ()=>{
//         ele.style.color = 'red';
//         ele.textContent = " Enter";
        
//     })
//     ele.addEventListener('mouse leave', ()=>{
//         ele.style.color = 'black';
//         ele.textContent = " Leave";
        
//     })
//     ele.addEventListener('mouse over', ()=>{
//         ele.style.color = 'red';
//         ele.textContent = " Over";
        
//     })
//     ele.addEventListener('mouse out', ()=>{
//         ele.style.color = 'red';
//         ele.textContent = " Out";
        
//     });

//     main1.append(ele);


    
// }
// let counter = 0;
// btns[0].addEventListener('click', output);
// btns[1].addEventListener('click', output);
// btns[0].addEventListener('mousedown', show1);
// btns[0].addEventListener('mouseup', show1);
// btns[0].addEventListener('mouseenter',show1);
// btns[0].addEventListener('mouseleave', show1);

// function show1(e){
//     counter++
//     main.textContent = `${e.type} ${counter}`;
// }



// function output(e){
//     counter++;
//     e.target.removeEventListener('click',output);
//     main.textContent = `${e.type} ${counter}`;
// }

// const myInput = document.querySelector('input');
// const output = document.querySelector('.output');

// for(let i = 0; i < 5; i++){
//     const ele = document.createElement('input');
//     output.append(ele);
//     ele.addEventListener('focus', ()=>{
//         ele.style.backgroundColor = 'red';
//     })
//     ele.addEventListener('focusout', ()=>{
//         ele.style.backgroundColor = 'white';
//     })
//     ele.onchange = ()=>{
//         console.log(ele.value)
//     }
//     ele.addEventListener('keydown', adder);
//     ele.addEventListener('keyup', adder);
// }

// function adder(e){
//     console.log(e.type);
//     console.log(e.key);
// }

// myInput.onfocus = ()=>{
//     console.log('focused');
// }

// const myVal = document.querySelector('input');
// const main = document.querySelector('.output');

// myVal.addEventListener('change', ()=>{
//     main.innerHTML = '';
//     const ul = document.createElement('ul');
//     main.append(ul);
//     if(!isNaN(myVal.value)){
//         for(let i = 0; i < myVal.value; i++){
//         const li = document.createElement('li');
//         li.textContent = `Index ${i}`;
//         ul.append(li);
        
//         }
//     }
// })