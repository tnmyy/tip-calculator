console.log(`Tip calculator web app`);

// Input variables

const bill = document.getElementById("bill");
const people = document.getElementById("people");

// tip Variables

const personTip = document.getElementById("personTip");
const totalTip = document.getElementById("totalTip");

// Calculating Tip

let selectedTipText = "1%";

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
      console.log(`otherBtn`);
      console.log(otherBtn);
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
