// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri in pagina devono essere rimossi e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati



// step 2: Ref
let display = document.querySelector('.display');
let display2 = document.querySelector('.display2');



// step 3: faccio la referenza dei pulsanti per poi attivare o resettare il timer

const btbPlay = document.querySelector('.start');
console.log(btbPlay);
const btbReset = document.querySelector('.reset');

let crono = document.querySelector('.crono');
let time = 20
let timer;

const randoNumber = genRandonList (5);
// console.log(randoNumber);

// play
btbPlay.addEventListener('click', () => {
    display.innerHTML = randoNumber;
    timer = setInterval( () => {  
        if (time === 0){
            clearInterval(timer);
            crono.innerText = 0;
            display.innerText = '';

            // ottenere 5 numeri dall utente
            const guess = getUserNumber (randoNumber.length);
            // console.log(guess);

            // controllo dei numeri
            const numGuess = guess.filter(element => randoNumber.includes(element));
            // console.log(numGuess);

            // risultato
            confetti ({
                particleCount: 10000,
                spread: 360,
                gravity: 0.5,
            });

                display2.innerHTML = `Totale numero indovinati: ${numGuess.length}. 
            Numeri indovinati: ${numGuess}
            La lista era: ${randoNumber}`

        } else {
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
    display2.innerHTML = '';
});






// step 1: creo una funzione che mi crei numeri casuali

// function genRandonNumber (min, max){
//     let num = [];
//     for (let i = 0; i < 8; i++){
//         num += Math.floor(Math.random() * (max - min + 1) ) + min;
//     }
//     return num;
// }


// genera 5 numeri univoci
function genRandonList (itemNumber) {
    const randNumbers = [];

    while (randNumbers.length < itemNumber) {
        // genera numero random
        const rand = genRandonNumber (1, 100);

        // controllo num univico
        if (!randNumbers.includes(rand)) {
            randNumbers.push(rand);
        }
        
    }
    return randNumbers;
}

function genRandonNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// chiedere 5 numeri all utente

function getUserNumber (asktime) {
    const userNumber = [];

    // chiedere 5 volte all utente
    while(userNumber.length < asktime) {
        const user = parseInt( prompt(`Inserisci i ${asktime} numeri che hai appena visto: 
Inserimento numero ${userNumber.length + 1} di ${asktime}`) );

        if (!userNumber.includes(user) && !isNaN(user)) {
            userNumber.push(user);
        }
    }

    return userNumber;
}