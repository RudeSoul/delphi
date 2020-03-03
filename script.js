function dropDownFunc() {
  let x = document.querySelector(".short-overview__icon");
  let y = document.querySelector(".dropdown-options");
  let z = document.querySelector(".short-overview__icon");

  if (y.style.display == "none") {
    y.style.display = "block";
    z.style.transform = "rotateZ(-90deg)";
    z.style.marginTop = "12px";
  } else {
    y.style.display = "none";
    z.style.transform = "rotate(0deg)";
    z.style.marginTop = "16px";
  }
}
