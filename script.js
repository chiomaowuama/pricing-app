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
