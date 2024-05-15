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
allPrices.forEach((price, index) => {
  document.getElementById("price" + (index + 1)).innerText = price.monthly;
});

function togglepriceplans(event) {
  //   the toggle effect
  let isChecked = event.currentTarget.checked;
  //   let toggledClass = document.getElementById("beforeeffect");
  //   let toggledClass1 = document.getElementById("beforeeffect1");
  //   let toggledClass2 = document.getElementById("beforeeffect2");

  if (isChecked) {
    allPrices.forEach((price, index) => {
      document.getElementById("price" + (index + 1)).innerText = price.yearly;
      document
        .getElementById("price" + (index + 1))
        .classList.add("aftereffect");
    });
    //     toggledClass.classList.add("aftereffect");
  } else {
    allPrices.forEach((price, index) => {
      document.getElementById("price" + (index + 1)).innerText = price.monthly;
      document
        .getElementById("price" + (index + 1))
        .classList.add("aftereffect");
    });
    //     toggledClass.classList.remove("aftereffect");
  }
}
