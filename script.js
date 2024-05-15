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
  let element = null;
  for (let index = 0; index < allPrices.length; index++) {
    element = allPrices[index].monthly;
  }
  console.log(element);
  for (let index = 0; index < allPrices.length; index++) {
    let elements = allPrices[index].yearly;
  }
  //   the toggle effect
  let isChecked = event.currentTarget.checked;
  let toggledClass = document.getElementById("beforeeffect");
  let toggledClass1 = document.getElementById("beforeeffect1");
  let toggledClass2 = document.getElementById("beforeeffect2");

  if (isChecked) {
    toggledClass.classList.add("aftereffect");
  } else {
    toggledClass.classList.remove("aftereffect");
  }
}
