// console.log(`Tip calculator web app`);

// // Input variables

// const bill = document.getElementById("bill");
// const people = document.getElementById("people");

// // tip Variables

// const personTip = document.getElementById("personTip");
// const totalTip = document.getElementById("totalTip");

// // Calculating Tip

// let selectedTipText;

// const tip = () => {
//   selectedTipText = document.querySelector(".selectedTip");

//   if (selectedTipText) {
//     selectedTipText = selectedTipText.textContent;
//     selectedTipText = Number.parseFloat(selectedTipText);
//     console.log(selectedTipText);
//   } else {
//     console.log(`No tip selected`);
//   }
// };
// console.log(selectedTipText);

// if (selectedTipText == undefined) {
//   selectedTipText = 1;
// }

// // Evaluating Tip

// let totalTipOutput;
// let personTipOutput;

// const output = () => {
//   totalTipOutput = ((selectedTipText / 100) * bill.value).toFixed(2);
//   console.log(totalTipOutput);

//   personTipOutput = (totalTipOutput / people.value).toFixed(2);
//   console.log(personTipOutput);
// };

// // Configuring Tip Percentage

// const tipBtn = document.querySelectorAll(".tipBtn");
// let selectedTip;
// let oldSelectedTip;

// tipBtn.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     selectedTip = btn.classList.add("selectedTip");
//     oldSelectedTip = document.querySelector(".selectedTip");
//     oldSelectedTip.classList.remove("selectedTip");
//     console.log(oldSelectedTip);
//     tip();
//   });
// });

// bill.addEventListener("input", () => {
//   output();
//   totalTip.innerHTML = totalTipOutput;
//   console.log(selectedTipText);
// });
// people.addEventListener("input", () => {
//   output();
//   personTip.innerHTML = personTipOutput;
//   console.log(selectedTipText);
// });

console.log(`Tip calculator web app`);

// Input variables
const bill = document.getElementById("bill");
const people = document.getElementById("people");

// tip Variables
const personTip = document.getElementById("personTip");
const totalTip = document.getElementById("totalTip");

// Calculating Tip
let selectedTipText = "5%"; // Default value

const tip = () => {
  if (selectedTipText) {
    const selectedTipValue = parseFloat(selectedTipText);
    console.log(selectedTipValue);
    return selectedTipValue;
  } else {
    console.log(`No tip selected`);
    return 0;
  }
};

// Evaluating Tip
const output = () => {
  const tipPercentage = tip();

  const totalTipOutput = (
    (tipPercentage / 100) *
    parseFloat(bill.value)
  ).toFixed(2);
  console.log(totalTipOutput);

  const personTipOutput = (totalTipOutput / parseFloat(people.value)).toFixed(
    2
  );
  console.log(personTipOutput);

  totalTip.innerHTML = `₹${totalTipOutput}`;
  personTip.innerHTML = `₹${personTipOutput}`;
};

// Configuring Tip Percentage
const tipBtn = document.querySelectorAll(".tipBtn");

tipBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    tipBtn.forEach((otherBtn) => {
      otherBtn.classList.remove("selectedTip");
    });

    btn.classList.add("selectedTip");
    selectedTipText = btn.textContent;
    output();
  });
});

bill.addEventListener("input", () => {
  output();
});

people.addEventListener("input", () => {
  output();
});
