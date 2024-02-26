// // apply button and next button disabled
// const applyButton = document.getElementById('apply');
// const nextbtnButton = document.getElementById('nextbtn');

// // 1.get the current amount
// const currentAmountElement = document.getElementById('current-amount');
// const currentScoreText = currentAmountElement.innerText;
// const currentScore = parseInt(currentScoreText);
// console.log(currentScore);

// // 2.increase the amount by 550
// const newAmount = currentScore + 550;

// // 3.show the update score
// currentAmountElement.innerText = newScore;

// seats left
const totalSeats = document.getElementById("seat-left");
const totalSeatsAmount = totalSeats.innerHTML;
console.log(totalSeatsAmount);

// selected seats
const selectedSeat = document.getElementById("current-amount");
const selectedSeatAmount = selectedSeat.innerHTML;
console.log(selectedSeatAmount);

// bus seats interior
const clickedSeats = document.getElementById("bus-interior");
