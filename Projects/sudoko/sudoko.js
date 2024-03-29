
// let array=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]
// let input=document.createElement('input');
// input.type='number';
// input.style.width='45px';
// input.style.height='45px';
// input.style.fontSize='25px';
// input.style.textAlign='center';
// input.style.border='1px solid black';
// input.placeholder='כמה מספרים למלא בלוח?'
// input.setAttribute('id','input');
// const button=document.createElement('button');
// button.innerHTML='למלא את הלוח';    
// button.setAttribute('id','btn');
// let para=document.getElementById('p');

// document.body.appendChild(input);
// document.body.appendChild(button);
//   button.addEventListener('click',()=>{
//     if(input.value<18){
// para.innerHTML='הלוח מתחיל עם לפחות 18 משבצות מלאות'
// return false;
//     }
// if(Maincheck()===true)
// {
//     console.log(array);
//     return array;
// }
// })

//     function Maincheck(){
//     let sum=input.value;
//     let count=0;
//     let boolean=false;
//     while(!boolean){
//         while(count<sum){
//             let i=Math.floor(Math.random()*9);
//             let j=Math.floor(Math.random()*9);
//             if(array[i][j]===0){
//                 array[i][j]=Math.floor(Math.random()*9)+1;
//                 count++;
//             }
//         }
//         boolean=check(array);
//         count=0;
//     }
// }
// function check(array){
//     for(let i=0;i<9;i++){
//         for(let j=0;j<9;j++){
//             if(array[i][j]!==0){
//                 if(!checkRows(i,j,array[i][j])||!checkColumns(i,j,array[i][j])||!checkSquare2(i,j,array[i][j])){
//                     return false;
//                 }
//             }
//         }
//     }
//     return true;
// }
// function checkSquare2(i,j, value){
//     for (let n = 0; n < 9; n++) {
//         if (array[i][n] === value && n !== j) {
//             return false;
//         }
//                 }
//                 return true;
//             }

