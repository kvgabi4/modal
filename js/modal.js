'use strict';

const hide = document.querySelectorAll('.hide');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

function openModal(element) {
    for (let i = 0; i < element.length; i += 1) {
        element[i].classList.remove('hide');
    }
};

function getFocus(event) {
    event.focus();
}

(function clickOpenModal() {
    const element = document.querySelector('.btn-openModal');
    element.addEventListener('click', () => {
        openModal(hide);
        getFocus(modal);
    })
})();

function closeModal(element) {
    element.classList.add('hide');
};

function loseFocus(event) {
    event.blur();
}

(function clickCloseModal() {
    const classes = document.querySelectorAll('.overlay, .okey, .cancel, .fa.fa-times');
    for (let i = 0; i < classes.length; i += 1) {
        classes[i].addEventListener('click', () => {
            loseFocus(modal);
            closeModal(overlay);
            closeModal(modal);
        });
    }
})();
