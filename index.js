'use strict';

const tlacitka = document.querySelectorAll('button');
tlacitka.forEach((tlacitko) => {
  tlacitko.addEventListener('click', (e) => {
    console.log(e.target);
  });
});

const koleckoHraje = document.querySelector('#krizek');
const krizekHraje = document.querySelector('#kolecko');
const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i += 1) {
  const button = buttons[i];

  button.addEventListener('click', () => {
    koleckoHraje.classList.toggle('board__field--cross');
    document.querySelector('.hra-kroužek').style.display = 'inline-block';

    if (koleckoHraje.className === 'hra-krizek') {
      document.querySelector('.hra-krizek').style.display = 'inline-block';
      button.innerHTML = `<img  src="image2/cross-křízek.svg"/>`;
      document.querySelector('.hra-krizek').style.display = 'none';
    } else {
      document.querySelector('.hra-krizek').style.display = 'inline-block';
      button.innerHTML = `<img  src="image2/circle-kruh.svg" />`;
      document.querySelector('.hra-kroužek').style.display = 'none';
    }
  });
}
