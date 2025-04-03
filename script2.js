const form = document.querySelector('form');
const input = document.querySelector('input');
const result = document.querySelector('.result');
const error = document.querySelector('.error');

document.addEventListener('DOMContentLoaded', () => {
    form.addEventListenerv('submit', (event) => {