function createPromise(position, delay) {
return new Promise((resolve, reject) => {
setTimeout(() => {
const shouldResolve = Math.random() > 0.3;
if (shouldResolve) {
resolve({ position, delay });
} else {
reject({ position, delay });
}
}, delay);
});
}

const form = document.querySelector('.form');

form.addEventListener('submit',onFormSubmint) 

function onFormSubmint(event) { 
  event.preventDefault();
  
const delay = Number(form.elements.delay.value);
const step = Number(form.elements.step.value);
const amount = Number(form.elements.amount.value);

for (let i = 0; i < amount; i++) {
const position = i + 1;
const promiseDelay = delay + i * step;
createPromise(position, promiseDelay)
.then(({ position, delay }) => {
console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
})
.catch(({ position, delay }) => {
console.log(`❌ Rejected promise ${position} in ${delay}ms`);
});
}
};