// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati



// step 2: Ref
let display = document.querySelector('.display');



// step 3: faccio la referenza dei pulsanti per poi attivare o resettare il timer

const btbPlay = document.querySelector('.start');
console.log(btbPlay);
const btbReset = document.querySelector('.reset');

let crono = document.querySelector('.crono');
let time = 20
let timer;


// play
btbPlay.addEventListener('click', () => {
    display.innerHTML = genRandonNumber (1 , 9)
    timer = setInterval( () => {  
        if (time === 0){
            clearInterval(timer);
            crono.innerText = 0;
            display.innerText = 'Stop game';
        }else {
            crono.innerText = time;
            time--;
        }
    },1000)

});

// Reset
btbReset.addEventListener ('click', () => {
    time = 20;
    clearInterval(timer);
    crono.innerText = 'Ready?';
    display.innerText = 'NewGame';
});






// step 1: creo una funzione che mi crei numeri casuali

function genRandonNumber (min, max){
    let num = '';
    for (let i = 0; i < 8; i++){
        num += Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    return num;
}