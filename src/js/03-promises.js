import Notiflix from 'notiflix';

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

  for (let position = 1; position <= amount; position += 1) {
const promiseDelay = delay + (position-1) * step;
createPromise(position, promiseDelay)
.then(({ position, delay }) => {
Notiflix.Notify.success(`✅ Fulfilled promise ${position+1} in ${delay}ms`);
})
.catch(({ position, delay }) => {
Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
});    
  }
  event.currentTarget.reset();
};


