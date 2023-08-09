console.log(`Tip calculator web app`);

// Input variables

const bill = document.getElementById("bill");
const people = document.getElementById("people");

// tip Variables

const personTip = document.getElementById("personTip");
const totalTip = document.getElementById("totalTip");

// Calculating Tip

let selectedTipText;
const tip = () => {
  selectedTipText = document.querySelector(".selectedTip");
  console.log(selectedTipText.textContent);

  if (selectedTipText) {
    selectedTipText = selectedTipText.textContent;
    selectedTipText = Number.parseFloat(selectedTipText);
    console.log(selectedTipText);
  } else {
    console.log(`No tip selected`);
  }
};

// Evaluating Tip

let totalTipOutput;
let personTipOutput;

const output = () => {
  totalTipOutput = ((selectedTipText / 100) * bill.value).toFixed(2);
  console.log(totalTipOutput);

  personTipOutput = (totalTipOutput / people.value).toFixed(2);
  console.log(personTipOutput);
};

bill.addEventListener("input", () => {
  output();
  totalTip.innerHTML = totalTipOutput;
});
people.addEventListener("input", () => {
  output();
  personTip.innerHTML = personTipOutput;
});

// Configuring Tip Percentage

const tipBtn = document.querySelectorAll(".tipBtn");
let selectedTip;

tipBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedTip = btn.classList.toggle("selectedTip");
    tip();
  });
});
