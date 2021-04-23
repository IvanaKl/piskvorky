'use strict';

/*úkol 4*/
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
    koleckoHraje.classList.toggle('.hra-kroužek');
    document.querySelector('.hra-kroužek').style.display = 'inline-block';

    if (koleckoHraje.className === 'hra-krizek') {
      document.querySelector('.hra-krizek').style.display = 'inline-block';
      button.innerHTML = `<img  src="image2/cross-křízek.svg"/>`;
      document.querySelector('.hra-krizek').style.display = 'none';
      button.disabled = 'true';
    } else {
      document.querySelector('.hra-krizek').style.display = 'inline-block';
      button.innerHTML = `<img  src="image2/circle-kruh.svg" />`;
      document.querySelector('.hra-kroužek').style.display = 'none';
      button.disabled = 'true';
    }
  });
}

/*úkol 5*/

let playing = 'circle';
let click = 0;
const playingCross = document.querySelector('.hra-kroužek');

const playingFunction = (event) => {
  if (event.target.disabled) {
    return;
  }
  click++;
  if (click % 2 != 0) {
    event.target.classList.add('tlacitko--kolecko');
    playingCross.src = 'image2/cross-křízek.svg';
  } else {
    event.target.classList.add('tlacitko--krizek');
    playingCross.src = 'image2/circle-kruh.svg';
  }
  event.target.disabled = true;

  if (isWinningMove(event.target)) {
    alert(` ${getSymbol(event.target)} vítězí!`);
  }
};

document.querySelectorAll('.policko').forEach((element) => {
  element.addEventListener('click', playingFunction);
});

const boardSize = 10; // 10x10
const fields = document.querySelectorAll('.policko');

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length) {
    if (field === fields[fieldIndex]) {
      break;
    }
    fieldIndex++;
  }

  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};

const getField = (row, column) => {
  return document.querySelectorAll('.policko')[row * 10 + column];
};

const getSymbol = (field) => {
  if (field.classList.contains('tlacitko--krizek')) {
    return 'Křižek,';
  } else if (field.classList.contains('tlacitko--kolecko')) {
    return 'Kolečko,';
  } else {
    return undefined;
  }
};

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;

  let inRow = 1; // Jednička pro právě vybrané políčko
  // Koukni doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  return false;
};
