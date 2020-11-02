const select = document.querySelector('#settings');
const increment = document.querySelector('#increment');
const decrement = document.querySelector('#decrement');
const reset = document.querySelector('#reset');
let counter = document.querySelector('#counter');
let counterFollower = 0;

function zwieksz() {
    counterFollower += Number(select.value);
    check();
    counter.textContent = counterFollower;
}

function zmniejsz() {
    counterFollower -= Number(select.value);
    check();
    counter.textContent = counterFollower;
}

function resetuj() {
    counterFollower = 0;
    check();
    counter.textContent = counterFollower;
}

increment.addEventListener('click', zwieksz);
decrement.addEventListener('click', zmniejsz);
reset.addEventListener('click', resetuj);

function check() {
    if (counterFollower > 0) {
        counter.classList.add('plus');
        counter.classList.remove('minus');
    } else if (counterFollower < 0) {
        counter.classList.add('minus');
        counter.classList.remove('plus');
    } else {
        counter.classList.remove('minus');
        counter.classList.remove('plus');
    }
    
}

