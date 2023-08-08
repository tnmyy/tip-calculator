console.log(`Tip calculator web app`);

// Input variables

const bill = document.getElementById("bill");
const people = document.getElementById("people");

// Output Variables

const personTip = document.getElementById("personTip");
const totalTip = document.getElementById("totalTip");

// Calculating Tip

const output = () => {
  console.log(1);
};
// Configuring Tip Percentage

const tipBtn = document.querySelectorAll(".tipBtn");

tipBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("selectedTip");
    output();
  });
});
