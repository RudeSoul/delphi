function dropDownFunc() {
  let x = document.querySelector(".short-overview__icon");
  let y = document.querySelector(".dropdown-options");
  let z = document.querySelector(".short-overview__icon");

  if (y.style.display == "none") {
    y.style.display = "block";
    z.style.transform = "rotate(-90deg)";
    z.style.marginTop = "8px";
    z.style.marginLeft = "102px";
  } else {
    y.style.display = "none";
    z.style.transform = "rotate(0deg)";
    z.style.marginTop = "16px";
    z.style.marginLeft = "108px";
  }
}

function addTargetDropDown() {
  let a = document.getElementById("menuCard");
  a.classList.toggle("add-target__menu-card--active");
}

function targetFormMenuItems() {
  let b = document.getElementById("targetFormMenuItems");
  b.classList.toggle("menu-items--active");
}

function targetFormMenuItemsSecond() {
  let c = document.getElementById("targetFormMenuItemsSecond");
  c.classList.toggle("menu-items--active");
}

function checkUncheck(a) {
  let d = document.getElementById("checkbox1");
  let e = document.getElementById("checkbox2");
  let i = document.getElementById("checkbox3");
  let j = document.getElementById("checkbox4");

  if (a == 1) {
    d.classList.toggle("checked");
  } else if (a == 2) {
    e.classList.toggle("checked");
  } else if (a == 3) {
    i.classList.toggle("checked");
  } else if (a == 4) {
    j.classList.toggle("checked");
  }
}

function goBiologicalTab() {
  let f = document.getElementById("goBiologicalTab");
  let g = document.getElementById("goBiologicalContent1");
  let h = document.getElementById("goBiologicalContent2");
  let x = f.classList.toggle("leftbar-list--active");
  if (x == true) {
    g.style.visibility = "visible";
    h.style.visibility = "visible";
  } else {
    g.style.visibility = "hidden";
    h.style.visibility = "hidden";
  }
}

function save() {
  alert("saved");
}
