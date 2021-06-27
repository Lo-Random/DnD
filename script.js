document.querySelector('span').addEventListener('click', myRand)

// function myClik() {
//   let a = document.querySelector('.i-1').value;
//   document.querySelector('.out').innerHTML = a;
// }

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function myRand() {
  a = getRandomIntInclusive(1, 20);
  return document.querySelector('.turn').innerHTML = a;
}

// document.addEventListener('click', () => {
//   myClik()
// })
