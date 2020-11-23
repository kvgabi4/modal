'use strict';

const hide = document.querySelectorAll('.hide');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

function openModal(event) {
    for (let i = 0; i < event.length; i += 1) {
        event[i].classList.remove('hide');
    }
};

function getFocus(event) {
    event.focus();
    event.classList.add('modal-focus');
}

(function clickOpenModal() {
    const element = document.querySelector('.btn-openModal');
    element.addEventListener('click', () => {
        openModal(hide);
        getFocus(modal);
    })
})();

function closeModal(event) {
    event.classList.add('hide');
};

function transition(event) {
    event.classList.remove('modal-focus');
}

(function clickCloseModal() {
    const classes = document.querySelectorAll('.overlay, .okey, .cancel, .fa.fa-times');
    for (let i = 0; i < classes.length; i += 1) {
        classes[i].addEventListener('click', () => {
            transition(modal);
            setTimeout(() => closeModal(overlay), 300);
            setTimeout(() => closeModal(modal), 300);
        });
    }
})();
