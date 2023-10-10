const adviceIdEl = document.getElementById('advice-id');
const adviceEl = document.getElementById('advice');
const buttonEl = document.getElementById('generate');

newAdvice();
buttonEl.addEventListener('click', newAdvice);

async function newAdvice() {
  let data;
  do {
    data = await getRandomAdvice();
  } while (data.id == adviceIdEl.textContent);

  adviceIdEl.textContent = data.id;
  adviceEl.textContent = data.advice;
}

async function getRandomAdvice() {
  const res = await fetch('https://api.adviceslip.com/advice');
  const data = await res.json();

  return data.slip;
}
