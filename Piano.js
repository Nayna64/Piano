// load Audio
const DO = new Audio('audio/do.mp3')
const RE = new Audio('audio/re.mp3')
const MI = new Audio('audio/mi.mp3')
const FA = new Audio('audio/fa.mp3')
const SOL = new Audio('audio/sol.mp3')
const LA = new Audio('audio/la.mp3')
const SI = new Audio('audio/si.mp3')

// select piano keys

let doKey = document.getElementById('do')
let reKey = document.getElementById('re')
let miKey = document.getElementById('mi')
let faKey = document.getElementById('fa')
let solKey = document.getElementById('sol')
let laKey = document.getElementById('la')
let siKey = document.getElementById('si')



document.addEventListener('keydown', (e) =>{

    switch(e.key){
        case 'd':
            DO.play();
            doKey.classList.add('active')
            break;
        case 'f':
            RE.play();
            reKey.classList.add('active')
            break;
        case 'g':
            MI.play();
            miKey.classList.add('active')
            break;
        case 'h':
            FA.play();
            faKey.classList.add('active')
            break;
        case 'j':
            SOL.play()
            solKey.classList.add('active')
            break;
        case 'k':
            LA.play()
            laKey.classList.add('active')
            break;
        case 'l':
            SI.play();
            siKey.classList.add('active')
            break;
    }
})

document.addEventListener('keyup', (e) => {
    switch(e.key){
        case 'd':
            doKey.classList.remove('active')
            break;
        case 'f':
            reKey.classList.remove('active')
            break;
        case 'g':
            miKey.classList.remove('active')
            break;
        case 'h':
            faKey.classList.remove('active')
            break;
        case 'j':
            solKey.classList.remove('active')
            break;
        case 'k':
            laKey.classList.remove('active')
            break;
        case 'l':
            siKey.classList.remove('active')
            break;
    }
})

