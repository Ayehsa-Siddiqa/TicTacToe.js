let turn = "X";
let gameover = false;
const changeTurn = () => {
    return turn ==="X"? "0":"X";
}

/**
 * create game structure
 */
//1st way
let buttonContainer = document.getElementById("button-container");
for(let i = 0; i <= 8; i++){
    var button = `<button class='btns'></button>` ;
    buttonContainer.innerHTML += button; 
 }

 /**
  * check win function
 */
const checkWin = () => {
    let btns = document.getElementsByClassName("btns");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
     ]
     wins.forEach((element) =>{  
        if((btns[element[0]].innerText === btns[element[1]].innerText) && (btns[element[1]].innerText === btns[element[2]].innerText) && (btns[element[0]].innerText) !== ''){
            document.getElementById("output").innerText= btns[element[0]].innerText + "  Won";
            btns[element[0]].style.color="red";
            btns[element[1]].style.color="red";
            btns[element[2]].style.color="red";
            gameover = true; 
            let disble = Array.from(btns);
            disble.forEach(ele => { 
                ele.setAttribute("disabled", "disabled")    
             })   
        }
     })
} 
 /**
  * game logic
*/ 
let allBtns =document.querySelectorAll(".btns");
 for(let i = 0; i < allBtns.length; i++){
     if(i === 0){
        allBtns[i].classList.add('border-top-left-0')
     }
     if((i === 1)){
        allBtns[i].classList.add('border-top-0')
     }
     if((i === 2)){
        allBtns[i].classList.add('border-top-right-0')
     }
     if((i === 3)){
        allBtns[i].classList.add('border-left-0')
     } 
     if((i === 5)){
        allBtns[i].classList.add('border-right-0')
     }
     if(i === 6){
        allBtns[i].classList.add('border-left-bottom-0')
     }
     if(i === 7){
        allBtns[i].classList.add('border-bottom-0')
     }
     if(i === 8){
        allBtns[i].classList.add('border-bottom-right-0')
     }
 }
let btnsArray = Array.from(allBtns);
btnsArray.forEach(element => {
     element.addEventListener('click', function(){
        if(element.innerText===''){
            element.innerText = turn;
            turn = changeTurn();
            checkWin();
        }
        if(!gameover){
            document.getElementById("output").innerText= "Turn For " + turn;
        }
     });
});

/**
 * restart game function
*/
document.getElementById("reset").addEventListener('click',() => {
    window.location.reload();
    btnsArray.forEach(elem => {
      elem.innerText ='';
    })
})



 
 

















































// 3 wyas to insert buttons inside the container using js
//2nd way
// let buttonContainer = document.getElementById("button-container");
// let btnn= '';
// for(let i = 0; i <= 8; i++){
//     btnn += `<button class='btns border-1'></button>` 
// }
// buttonContainer.innerHTML = btnn;


// 3rd way
// let buttonContainer = document.getElementById("button-container");
// for(let i = 0; i <= 8; i++){
//     var button = document.createElement("button");
//     // button.textContent = "button";
//     buttonContainer.appendChild(button); 
// }
