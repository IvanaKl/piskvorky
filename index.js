'use strict';

const tlacitka = document.querySelectorAll('button');
tlacitka.forEach((tlacitko) => {
  tlacitko.addEventListener('click', (e) => {
    console.log(e.target);
  });
});

const kolecko = document.querySelector('#krizek');
const krizek = document.querySelector('#kolecko');
const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i += 1) {
  const button = buttons[i];

  button.addEventListener('click', () => {
    krizek.classList.toggle('hra-kroužek');
    kolecko.classList.toggle('hra-krizek');

    if (kolecko.className === 'hra-krizek') {
      button.innerHTML = `<img src="image2/cross-křízek.svg"/>`;
    } else {
      button.innerHTML = `<img src="image2/circle-kruh.svg" />`;
    }
  });
}
