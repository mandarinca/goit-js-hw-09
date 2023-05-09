import Notiflix from 'notiflix';

let formEl = document.querySelector('form');

console.log(formEl);

formEl.addEventListener('submit', function (e) {
  e.preventDefault();

  let amount = parseInt(e.target.elements.amount.value); // Отримуємо кількість промісів з поля amount
  
  let delay = parseInt(e.target.elements.delay.value); // Отримуємо затримку з поля delay
  
  let step = parseInt(e.target.elements.step.value); // Отримуємо крок з поля step
  

  for (let i = 1; i <= amount; i += 1) {
    

    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  console.log(delay);
  console.log(position);

  let obj = { position, delay };
  console.log(obj);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(obj)
        //       // 0.3
        //       resolve(shouldResolve); // Fulfill shouldResolve
      } else {
        reject(obj); // Reject
      }
    }, delay);
  })
}
//   
//     const shouldResolve = Math.random() > 0.3;
//     if (shouldResolve) {
//       // 0.3
//       resolve(shouldResolve); // Fulfill shouldResolve
//     } else {
//       reject(shouldResolve); // Reject
//     }
//   }, (delay += step));
// }

// Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay) стільки разів, скільки ввели в поле amount. Під час кожного виклику передай їй номер промісу (position), що створюється, і затримку, враховуючи першу затримку (delay), введену користувачем, і крок (step).

//console.log(createPromise(2, 1500));
//   .then(({ position, delay }) => {
//     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// Доповни код функції createPromise таким чином, щоб вона повертала один проміс, який виконується або відхиляється через delay часу. Значенням промісу повинен бути об'єкт, в якому будуть властивості position і delay зі значеннями однойменних параметрів. Використовуй початковий код функції для вибору того, що потрібно зробити з промісом - виконати або відхилити.
