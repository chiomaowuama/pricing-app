let allPrices = [
  {
    monthly: 19.99,
    yearly: 199.99,
  },
  {
    monthly: 24.99,
    yearly: 249.99,
  },
  {
    monthly: 39.99,
    yearly: 399.99,
  },
];

function togglepriceplans(event) {
  let isChecked = event.currentTarget.checked;
  let toggledClass = document.getElementById("beforeeffect");
  if (isChecked) {
    toggledClass.classList.add("aftereffect");
  } else {
    toggledClass.classList.remove("aftereffect");
  }
  //   console.log(toggledClass);
}
