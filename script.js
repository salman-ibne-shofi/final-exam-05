const seatDiv = document.getElementById("bus-interior");
const seatList = document.getElementById("seat-list");
const seatLeft = document.getElementById("seat-left");
const seatSelected = document.getElementById("seat-selected");
const cost = document.getElementById("cost");
const cost2 = document.getElementById("cost2");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const submitButton = document.getElementById("submit-button");
const seatArray = [];
seatLeft.innerHTML = 40;

// next button
function play() {
	//step-1: hide the ticket collection section
	const ticketSection = document.getElementById("ticket-collection-section");
	ticketSection.classList.add("hidden");
	//step-2: show the thank you section
	const thankYouSection = document.getElementById("thank-you");
	thankYouSection.classList.remove("hidden");
	// console.log(thankYouSection.classList)
}

function seatClicked(event) {
	if (event.target.tagName == "BUTTON") {
		const btnText = event.target.innerText;

		if (seatArray.length < 4 && !seatArray.includes(btnText)) {
			event.target.classList.add("bg-[#1DD100]", "text-white");
			seatArray.push(btnText);
			seatSelected.innerHTML = seatArray.length;
			const calculatedCost = seatArray.length * 550;
			cost.innerHTML = calculatedCost;
			cost2.innerHTML = calculatedCost;
			seatLeft.innerHTML -= 1;
		}

		var ourHTML = "";
		for (var i = 0; i < seatArray.length; i++) {
			const seatNumber = seatArray[i];

			ourHTML +=
				"<div class='flex justify-between py-2 text-[#03071280]'><p>" +
				seatNumber +
				"</p><p>Economoy</p><p>550</p></div>";
		}
		seatList.innerHTML = ourHTML;

		console.log(seatArray);
	}
}

seatDiv.addEventListener("click", seatClicked);

function inputCheck() {
	if (
		input2.value.trim() !== "" &&
		input1.value.trim() !== "" &&
		input3.value.trim() !== ""
	) {
		submitButton.disabled = false;
	} else {
		submitButton.disabled = true;
	}
}

input1.addEventListener("input", inputCheck);
input2.addEventListener("input", inputCheck);
input3.addEventListener("input", inputCheck);
