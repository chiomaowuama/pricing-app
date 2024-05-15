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
for (let index = 0; index < allPrices.length; index++) {
  const element = allPrices[index].monthly;
  console.log(element);
}
for (let index = 0; index < allPrices.length; index++) {
  const elements = allPrices[index].yearly;
  console.log(elements);
}

function togglepriceplans(event) {
  let isChecked = event.currentTarget.checked;
  let toggledClass = document.getElementById("beforeeffect");
  let toggledClass1 = document.getElementById("beforeeffect1");
  let toggledClass2 = document.getElementById("beforeeffect2");
  for (let index = 0; index < allPrices.length; index++) {
    const element = allPrices[index].monthly;
    console.log(element);
  }

  if (isChecked) {
    toggledClass.classList.add("aftereffect");
    toggledClass.innerText = element;
  } else {
    toggledClass.classList.remove("aftereffect");
  }
  //   console.log(toggledClass);
}
